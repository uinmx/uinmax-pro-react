import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:[
      { find: "@", replacement: resolve(__dirname, 'src') + '/' },
      { find: /^~/, replacement: '' },
    ]
  },

  plugins: [react()],
})
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/uinmx/react-template.git
  git push -u origin main
