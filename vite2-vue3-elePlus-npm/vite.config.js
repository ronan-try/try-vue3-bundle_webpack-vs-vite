import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import visualizer from 'rollup-plugin-visualizer'
import analyze from 'rollup-plugin-analyzer'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // analyze(),
    visualizer()
  ],
  // build: {
  //   rollupOptions: {
  //     plugins: [ nodeResolve() ],
  //     output: {
  //       manualChunks: {
  //         'ElementPlus': ['element-plus']
  //       }
  //     }
  //   }
  // }
})
