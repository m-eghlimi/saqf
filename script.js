document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Check for saved user preference, if any, on load
    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(currentTheme + "-theme");
    themeIcon.classList.add(currentTheme === "light" ? "sun" : "moon");

    // Listen for the toggle button click
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme");

        const newTheme = document.body.classList.contains("light-theme") ? "light" : "dark";
        themeIcon.classList.toggle("sun");
        themeIcon.classList.toggle("moon");

        // Save the new preference in local storage
        localStorage.setItem("theme", newTheme);
    });
});