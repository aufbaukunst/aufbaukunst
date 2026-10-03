import { spawnSync } from 'node:child_process';
import { cpSync, copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
const result=spawnSync(process.execPath,['node_modules/vite/bin/vite.js','build','--config','pages.vite.config.ts'],{stdio:'inherit'});
if(result.status!==0)process.exit(result.status||1);
copyFileSync('dist-pages/pages-entry.html','index.html');
for(const directory of ['assets','images']){mkdirSync(directory,{recursive:true});cpSync('dist-pages/'+directory,directory,{recursive:true});}
copyFileSync('dist-pages/favicon.svg','favicon.svg');
writeFileSync('.nojekyll','');
