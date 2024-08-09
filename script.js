document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    // بررسی وضعیت تم ذخیره‌شده
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('light-theme', 'dark-theme');
        body.classList.add(savedTheme);
    }
    
    if (body.classList.contains('dark-theme')) {
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6 0a6 6 0 0 0 0 12c1.7 0 3.3-.8 4.3-2A6 6 0 0 1 6 0zM7.5 16a7.5 7.5 0 1 0 0-15h-.5a7.5 7.5 0 0 1 7.5 7.5v.5a7.5 7.5 0 0 1-7.5 7.5h-.5z"/>
                          </svg>`;
    } else {
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a4 4 0 1 0 0 8A4 4 0 0 0 8 4zM8 1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V1zM8 13a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-2zM2.343 2.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 3.05a.5.5 0 0 1 0-.707zM11.536 11.536a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707zM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zM13 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zM2.343 11.536a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.536 3.05a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0z"/>
                          </svg>`;
    }

    // تغییر تم و ذخیره‌سازی در LocalStorage
    document.getElementById('theme-toggle').addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        
        const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', currentTheme);
        
        if (currentTheme === 'dark-theme') {
            icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor