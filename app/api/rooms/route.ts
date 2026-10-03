import rooms from '@/data/rooms.json';
export async function GET(){return Response.json({rooms,mode:'preview'},{headers:{'Cache-Control':'no-store'}})}
