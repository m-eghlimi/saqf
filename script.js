document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // بررسی تم تلگرام و تنظیم تم وب اپ
    const isDarkMode = window.Telegram.WebApp.themeParams.bg_color.includes("1a1a1a");
    document.body.classList.add(isDarkMode ? "dark-theme" : "light-theme");
    themeIcon.className = isDarkMode ? "fas fa-sun" : "fas fa-moon";

    // سوئیچ تم و تغییر آیکون
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");

        const isLight = document.body.classList.contains("light-theme");
        themeIcon.className = isLight ? "fas fa-moon" : "fas fa-sun";
    });
});
