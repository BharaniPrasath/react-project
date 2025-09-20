import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ensures proper paths on Vercel
  build: {
    outDir: 'dist', // default, Vercel expects this folder
  },
});