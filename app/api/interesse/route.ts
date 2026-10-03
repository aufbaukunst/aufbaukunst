import {env} from 'cloudflare:workers';
import rooms from '@/data/rooms.json';
const error=(message:string,status:number)=>Response.json({error:message},{status});
export async function POST(request:Request){
 if(request.headers.get('origin')!==new URL(request.url).origin)return error('Diese Anfrage ist nicht erlaubt.',403);
 if(!request.headers.get('content-type')?.includes('application/json'))return error('Ungültiges Anfrageformat.',415);
 if(Number(request.headers.get('content-length')||0)>12000)return error('Die Anfrage ist zu lang.',413);
 let p;try{const raw=await request.text();if(raw.length>12000)return error('Die Anfrage ist zu lang.',413);p=JSON.parse(raw);}catch{return error('Die Anfrage konnte nicht gelesen werden.',400)}
 if(!p||typeof p!=='object')return error('Bitte prüfe deine Angaben.',400);
 if(p.website)return error('Die Anfrage konnte nicht angenommen werden.',400);
 const clean=(v:unknown,max:number)=>typeof v==='string'?v.trim().slice(0,max):'';
 const roomId=clean(p.roomId,2),name=clean(p.name,120),email=clean(p.email,200),organization=clean(p.organization,160),message=clean(p.message,2000);
 if(!rooms.some(r=>r.id===roomId)||!name||!/^\S+@\S+\.\S+$/.test(email)||p.consent!==true)return error('Bitte ergänze Name, gültige E-Mail und Zustimmung.',400);
 try{if(!env.DB)throw Error('DB unavailable');const id=crypto.randomUUID();await env.DB.prepare('INSERT INTO inquiries (id, room_id, name, email, organization, message, created_at, mode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)').bind(id,roomId,name,email,organization,message,new Date().toISOString(),'preview').run();return Response.json({reference:id,mode:'preview'},{status:201})}catch(e){console.error('Inquiry storage unavailable');return error('Die Speicherung ist gerade nicht verfügbar. Deine Eingaben bleiben erhalten. Bitte versuche es später erneut.',503)}
}
