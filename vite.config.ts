import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [UniPages(), UniLayouts(), uni()],
});
