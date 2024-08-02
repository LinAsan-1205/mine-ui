export interface CurrentPage {
    route?: string
    vm?: Record<string, any>
}

const getCurrentPage = (): CurrentPage => {
    const currentPages = getCurrentPages();
    if (currentPages.length === 0) {
        throw new Error('未找到当前页面');
    }
    const currentPage = currentPages[currentPages.length - 1];
    const vm = currentPage.$vm;
    return {
        vm,
        route: vm.route
    }
}

export {
    getCurrentPage
}
