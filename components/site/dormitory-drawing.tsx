/** Simplified rear elevation traced from the supplied dormitory photographs.
 * Six window columns, five storeys. Room mapping remains provisional. */
export function DormitoryDrawing(){
 const columns=[{x:255,w:54},{x:360,w:56},{x:470,w:35},{x:565,w:35},{x:665,w:60},{x:780,w:60}];
 const rows=[142,228,312,400,493];
 return <svg className="dorm-drawing" viewBox="0 0 1000 650" role="img" aria-labelledby="dorm-title dorm-description">
 <title id="dorm-title">Das Studierendenwohnheim in Odesa</title><desc id="dorm-description">Reduzierte Architekturzeichnung nach den Fotografien: ein rechteckiger Bau mit fünf Geschossen und sechs Fensterachsen.</desc>
 <defs><pattern id="draft-grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth=".35"/></pattern></defs>
 <rect className="drawing-grid" x="25" y="35" width="950" height="580" fill="url(#draft-grid)"/>
 <g className="draft-guides" fill="none" stroke="currentColor"><path d="M25 85H975M25 566H975M132 35V615M898 35V615M40 598H958"/><path d="M125 78h14m-7-7v14M891 78h14m-7-7v14M125 566h14m-7-7v14M891 566h14m-7-7v14"/></g>
 <g className="building-outline draw-lines" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter">
 <path pathLength="1" d="M132 566V104H898V566ZM124 104H905V94H124ZM130 94V86H900V94M491 86V48H510V86M486 48H515"/>
 {rows.map((y,row)=><g key={y} style={{animationDelay:`${.25+row*.15}s`}}>{columns.map(({x,w},i)=><g key={x}><rect pathLength="1" x={x} y={y} width={w} height={row===4?47:40}/><path pathLength="1" d={`M${x+3} ${y+3}h${w-6}v${row===4?41:34}h-${w-6}ZM${x+w*.3} ${y+3}v${row===4?41:34}M${x-3} ${y+(row===4?49:42)}h${w+6}`}/>{row===4&&<path pathLength="1" d={`M${x+7} ${y+5}l${w/2-7} 18 ${w/2-7}-18M${x+7} ${y+20}l${w/2-7} 18 ${w/2-7}-18M${x+w/2} ${y+3}v41`}/>}</g>)}</g>)}
 </g>
 <g className="facade-seams draw-lines" fill="none" stroke="currentColor" strokeWidth=".7">{[122,194,209,277,295,363,382,451,471,550].map(y=><path key={y} pathLength="1" d={`M133 ${y}H897`}/>)}{[217,325,435,535,630,747,865].map(x=><path key={x} pathLength="1" d={`M${x} 105V565`}/>)}</g>
 <g className="context-lines" fill="none" stroke="currentColor" strokeWidth="1"><path d="M55 567H958M120 578h790M70 563l-5-144 12-26-8-23 20-27-9-26 17-24 12 32-4 25 15 29-11 26 12 31-11 23-5 104M925 563l5-145-13-31 9-23-17-34 8-29-13-31-12 30 5 29-15 23 11 31-11 33 12 25 7 122M56 488l20-18 30 5M916 461l30-14 16 15"/><path d="M145 575h55m36 8h89m400-6h95M184 558v-32h10v32M850 558v-42h8v42"/></g>
 </svg>
}
