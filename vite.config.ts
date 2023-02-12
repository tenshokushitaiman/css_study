import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import postcss from 'postcss'
import presetEnv from 'postcss-preset-env'
import cssnano from 'cssnano'
import autoprefixer from "autoprefixer"

const dirname = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig({
  build: {
    outDir: "build"
  },
  plugins: [
    react(),
  ],
  css: {
    preprocessorOptions: {
      postcss: {
        plugins: [
          presetEnv({ stage: 0 }),
          cssnano(),
          autoprefixer()
        ],
        inject: false,
        extract: true
      },
    },
  },
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
