import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/What_Do_U_Need_2_Do/',
  plugins: [react()],
})
