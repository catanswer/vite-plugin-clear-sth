import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import clearSth from '../dist/index'

const config:UserConfig = {
  plugins: [
    vue(),
    clearSth({
      patterns: [/console.log\(.*\)/]
    })
  ]
}

export default config
