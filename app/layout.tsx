import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'AufbauKunst · Wir bauen Kunst wieder auf.',description:'Zimmerpatenschaften für das Studierendenwohnheim der Musikakademie Odesa. Gemeinsam kulturelle Räume wieder aufbauen.',icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'},robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='de'><body>{children}</body></html>}
