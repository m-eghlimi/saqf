document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('get-user-info');
    const userInfoDiv = document.getElementById('user-info');

    if (!button) {
        console.error('Button with ID "get-user-info" not found.');
        return;
    }

    button.addEventListener('click', function() {
        console.log('Button clicked');

        // بررسی اینکه آیا API تلگرام در دسترس است
        if (window.Telegram && window.Telegram.WebApp) {
            console.log('Telegram WebApp API is available');
            const user = window.Telegram.WebApp.initDataUnsafe.user;
            if (user) {
                console.log('User data found', user);
                // نمایش اطلاعات کاربر
                userInfoDiv.innerHTML = `
                    <p>نام: ${user.first_name} ${user.last_name}</p>
                    <p>نام کاربری: ${user.username}</p>
                    <p>شناسه کاربر: ${user.id}</p>
                `;
            } else {
                console.log('User data not available');
                userInfoDiv.innerHTML = '<p>اطلاعات کاربر در دسترس نیست.</p>';
            }
        } else {
            console.log('Telegram WebApp API is not available');
            userInfoDiv.innerHTML = '<p>API تلگرام در دسترس نیست.</p>';
        }
    });
});