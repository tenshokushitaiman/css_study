import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const dirname = path.dirname(new URL(import.meta.url).pathname)


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
  , resolve: {
    alias: {
      "@views/": `${dirname}/src/views/`
      , "@assets/": `${dirname}/src/assets/`

    }
  }
})
