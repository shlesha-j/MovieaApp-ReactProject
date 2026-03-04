import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// choose a base path depending on environment.  When running locally
// under a fake subdirectory we want the prefix, but on Vercel the site
// is mounted at the root so using "/" prevents 404s for the generated
// javascript/css files.

const basePath = process.env.NODE_ENV === 'production' ? '/' : '/MovieaApp-ReactProject/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
})
