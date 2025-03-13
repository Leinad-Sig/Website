import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Website/', // Replace 'website' with your repo name if needed
  build: {
    outDir: 'docs',  // <--- Output folder is now "docs"
  },
  plugins: [react()],
});