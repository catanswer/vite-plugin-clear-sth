# vite-plugin-clear-sth

Access to clear sth what you want when your project is building

## Install

```bash
  npm i -D vite-plugin-clear-sth
```
Add it to `vite.config.js`

```ts
  // vite.config.js
  import vue from '@vitejs/plugin-vue'
  import clearSth from 'vite-plugin-clear-sth'

  export default {
    plugins: [
      vue(),
      clearSth({
        // what you want to clear by your patterns
        patterns: [/console.log\(.*\)/g],
        include: [],
        exclude: []
      })
    ]
  }
```