import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
export default defineConfig({
 base:'/aufbaukunst/',
 plugins:[react()],
 resolve:{alias:{'@':path.resolve(import.meta.dirname,'.')}},
 define:{'process.env.NEXT_PUBLIC_DEMO':'"true"'},
 build:{outDir:'dist-pages',emptyOutDir:true,rollupOptions:{input:'pages-entry.html'}},
});
