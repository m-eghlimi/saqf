document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // بررسی تم تلگرام و تنظیم تم وب اپ
    const isDarkMode = window.Telegram.WebApp.themeParams.bg_color.includes("1a1a1a");
    document.body.classList.add(isDarkMode ? "dark-theme" : "light-theme");
    themeIcon.src = isDarkMode ? "telegram-sun-icon.png" : "telegram-moon-icon.png";

    // سوئیچ تم و تغییر آیکون
    themeToggle.addEventListener("click", () => {
        const isLight = document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");

        themeIcon.src = isLight ? "telegram-moon-icon.png" : "telegram-sun-icon.png";
    });
});