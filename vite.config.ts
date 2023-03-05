import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    root: resolve(__dirname, 'src'),
    publicDir: false, // vite의 public 폴더 비활성화
    // resolve: 절대경로 설정 가능
})