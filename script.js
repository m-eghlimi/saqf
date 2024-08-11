document.addEventListener("DOMContentLoaded", function() {
    // بررسی پارامترهای تم ارسال شده توسط تلگرام
    const telegramThemeParams = Telegram.WebApp.themeParams;

    if (telegramThemeParams) {
        // اگر تم دارک است، کلاس dark-mode اضافه شود
        if (telegramThemeParams.theme === "dark") {
            document.body.classList.add("dark-mode");
            document.getElementById("theme-icon").textContent = '🌙';
        }
    }

    // فانکشن برای تغییر تم توسط کاربر
    function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark-mode');
        const themeIcon = document.getElementById('theme-icon');
        if (body.classList.contains('dark-mode')) {
            themeIcon.textContent = '🌙';
        } else {
            themeIcon.textContent = '☀️';
        }
    }

    // تخصیص فانکشن تغییر تم به دکمه
    document.querySelector('.theme-switch').addEventListener('click', toggleTheme);
});