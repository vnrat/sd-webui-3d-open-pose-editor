import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/open-pose-editor/',
  define: {
    global: {},
    __APP_VERSION__: JSON.stringify('v0.0.2'),
    __APP_BUILD_TIME__: Date.now(),
  },
  build: {
    outDir: 'javascript',
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'openpose',
      fileName: 'openpose',
      formats: ['umd'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [react()],
})
