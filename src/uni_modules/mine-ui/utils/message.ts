export const showMessage = (message: string, duration = 2000) => {
    uni.showToast({
        title: message,
        icon: 'none',
        duration,
    })
}
