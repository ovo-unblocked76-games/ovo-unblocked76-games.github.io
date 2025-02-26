document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.floating-header');
    const toggleContainer = document.querySelector('.toggle-container');
    const toggleText = document.querySelector('.toggle-text');
    const arrow = document.querySelector('.arrow');
    let isVisible = true;

    // 初始状态隐藏文本
    toggleText.style.opacity = '0';
    toggleText.style.display = 'none';
    toggleContainer.style.minWidth = '40px';

    toggleContainer.onclick = function() {
        isVisible = !isVisible;
        arrow.classList.toggle('collapsed');
        header.classList.toggle('hidden');

        if (!isVisible) {
            // 隐藏状态：显示文本
            toggleText.style.display = 'inline';
            requestAnimationFrame(() => {
                toggleContainer.style.minWidth = '160px';
                toggleText.style.opacity = '1';
            });
        } else {
            // 显示状态：隐藏文本
            toggleText.style.opacity = '0';
            setTimeout(() => {
                toggleText.style.display = 'none';
                toggleContainer.style.minWidth = '40px';
            }, 150);
        }
    };
});

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isCollapsed = content.classList.contains('collapsed');

    // 切换箭头状态
    header.classList.toggle('active');

    // 切换内容显示状态
    if (isCollapsed) {
        content.classList.remove('collapsed');
    } else {
        content.classList.add('collapsed');
    }
}

// 页面加载完成后初始化所有手风琴面板为展开状态
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.classList.remove('active');
        header.nextElementSibling.classList.remove('collapsed');
    });
});

