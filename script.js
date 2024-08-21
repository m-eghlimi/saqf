document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');

    const profileIcon = document.querySelector('.profile-icon');
    const popup = document.getElementById('profile-popup');
    const closeBtn = popup.querySelector('.close-btn');
    const profileImg = document.getElementById('telegram-profile');
    const popupProfileImg = document.getElementById('popup-profile-img');
    const usernameDisplay = document.getElementById('username');
    const popupUsername = document.getElementById('popup-username');
    const fileInput = document.getElementById('file-input');

    profileIcon.addEventListener('click', () => {
        popup.style.display = 'block';
        if (profileImg.src) {
            popupProfileImg.src = profileImg.src;
        }
        if (usernameDisplay.textContent) {
            popupUsername.textContent = usernameDisplay.textContent;
        }
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    popupProfileImg.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profileImg.src = e.target.result;
                popupProfileImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    if (window.Telegram.WebApp) {
        const telegramUser = Telegram.WebApp.initDataUnsafe.user;

        if (telegramUser && telegramUser.photo_url) {
            profileImg.src = telegramUser.photo_url;
        } else {
            profileImg.src = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
        }

        if (telegramUser && telegramUser.username) {
            usernameDisplay.textContent = `@${telegramUser.username}`;
        } else {
            usernameDisplay.textContent = 'سقف';
        }
    } else {
        console.log('Not in Telegram WebApp environment');
        document.getElementById('username').textContent = 'سقف';
    }
});
