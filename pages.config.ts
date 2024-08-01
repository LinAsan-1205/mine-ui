import {defineUniPages} from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
    // 你也可以定义 pages 字段，它具有最高的优先级。
    pages: [],
    easycom: {
        autoscan: true,
    },
    globalStyle: {
        navigationBarTextStyle: 'black',
        navigationBarTitleText: 'mine-ui',
    },
    tabBar: {
        color: '#f2f3ff',
        selectedColor: '#0052d9',
        backgroundColor: '#ffffff',
        borderStyle: 'black',
        height: '0',
        list: [
            {
                pagePath: 'pages/index/index',
            },
            {
                pagePath: 'pages/app/app',
            },
            {
                pagePath: 'pages/chat/chat',
            },
            {
                pagePath: 'pages/user/user',
            },
        ],
    },
})
