// جاوااسکریپت برای دریافت اطلاعات کاربر تلگرام

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('get-user-info');
    const userInfoDiv = document.getElementById('user-info');

    button.addEventListener('click', function() {
        // بررسی اینکه آیا API تلگرام در دسترس است
        if (window.Telegram.WebApp) {
            const user = window.Telegram.WebApp.initDataUnsafe.user;
            if (user) {
                // نمایش اطلاعات کاربر
                userInfoDiv.innerHTML = `
                    <p>نام: ${user.first_name} ${user.last_name}</p>
                    <p>نام کاربری: ${user.username}</p>
                    <p>شناسه کاربر: ${user.id}</p>
                `;
            } else {
                userInfoDiv.innerHTML = '<p>اطلاعات کاربر در دسترس نیست.</p>';
            }
        } else {
            userInfoDiv.innerHTML = '<p>API تلگرام در دسترس نیست.</p>';
        }
    });
});