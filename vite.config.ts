import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  // Priority: System Environment Variable (Docker/Cloud Build) -> .env file -> undefined
  // Cast process to any to avoid "Cannot find name 'process'" error in TS build
  const apiKey = (process as any).env.API_KEY || env.API_KEY;

  return {
    plugins: [react()],
    define: {
      // Polyfill process.env for the app code which expects it
      'process.env.API_KEY': JSON.stringify(apiKey),
      'process.env': {} 
    }
  }
})