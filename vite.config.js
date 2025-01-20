import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws', // Use WebSocket instead of eval-based hot reloading
    },
  },
  root: './', // Ensures Vite starts from the root directory
});
