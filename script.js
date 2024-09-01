document.addEventListener('DOMContentLoaded', () => {
    // مدیریت کلیک بر روی لینک‌های ناوبری
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            // حذف کلاس active از همه لینک‌ها
            navLinks.forEach(link => link.classList.remove('active'));
            // افزودن کلاس active به لینک کلیک شده
            event.target.classList.add('active');
            // بارگذاری محتوای صفحه مربوطه
            loadPage(event.target.getAttribute('href'));
        });
    });

    // مدیریت جستجو
    const searchBar = document.querySelector('.search-bar input');
    searchBar.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();
        const infoCards = document.querySelectorAll('.info-cards .card');
        infoCards.forEach(card => {
            const content = card.textContent.toLowerCase();
            if (content.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function loadPage(page) {
    // اینجا می‌توانید کد لازم برای بارگذاری محتوای صفحه مربوطه را اضافه کنید
    console.log(`Loading page: ${page}`);
}