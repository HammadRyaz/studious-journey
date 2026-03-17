import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174, // pick a free port
    host: false, // ensures it binds to 0.0.0.0
    strictPort: true,
    open: true,        // auto-open browser
    hmr: {
      overlay: true,   // show errors in browser
      host: 'localhost'
    }
  }
})
