document.querySelectorAll('mdui-collapse-item').forEach((item) => {
    const icon = item.querySelector('.collapse-icon');

    item.addEventListener('open', () => {
        icon.name = 'arrow_drop_up';
    });
    item.addEventListener('close', () => {
        icon.name = 'arrow_drop_down';
    });
});