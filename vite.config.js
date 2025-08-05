import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Add this line - replace 'Portfolio' with your exact repository name
  server: {
    https: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    mkcert(),
  ],
})
