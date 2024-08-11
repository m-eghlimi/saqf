document.addEventListener("DOMContentLoaded", function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    // بررسی پارامترهای تم ارسال شده توسط تلگرام
    const telegramThemeParams = Telegram.WebApp.themeParams;

    if (telegramThemeParams) {
        // اگر تم دارک است، کلاس dark-mode اضافه شود
        if (telegramThemeParams.theme === "dark") {
            body.classList.add("dark-mode");
            themeSwitch.textContent = '☀️'; // تم دارک، نشان دادن آیکون خورشید سفید
        }
    }

    // فانکشن برای تغییر تم توسط کاربر
    function toggleTheme() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeSwitch.textContent = '☀️'; // تم دارک، نشان دادن آیکون خورشید سفید
        } else {
            themeSwitch.textContent = '🌙'; // تم لایت، نشان دادن آیکون ماه سیاه
        }
    }

    // تخصیص فانکشن تغییر تم به دکمه
    themeSwitch.addEventListener('click', toggleTheme);
});