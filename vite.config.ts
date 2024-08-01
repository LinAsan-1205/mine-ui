import {defineConfig} from "vite";
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import Uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
export default async () => {
    const UnoCSS = (await import('unocss/vite')).default
    return defineConfig({
        plugins: [UniPages(), UniLayouts(), Uni()],
    });
}
