import path from 'node:path'
import {defineConfig} from "vite";
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import Uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default async () => {
    const UnoCSS = (await import('unocss/vite')).default
    return defineConfig({
        resolve: {
            alias: {
                '@': path.join(process.cwd(), './src'),
                "mine-ui": path.join(process.cwd(), './src/uni_modules/mine-ui'),
            },
        },
        plugins: [UniPages(), UniLayouts(), Uni(), UnoCSS()],
    });
}
