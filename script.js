document.getElementById('get-user-info').addEventListener('click', function() {
    // بررسی اینکه آیا وب اپلیکیشن در محیط تلگرام باز شده است یا نه
    if (typeof Telegram !== 'undefined' && Telegram.WebApp.initDataUnsafe) {
        const user = Telegram.WebApp.initDataUnsafe.user;

        if (user) {
            // نمایش اطلاعات کاربر
            const userInfoDiv = document.getElementById('user-info');
            userInfoDiv.innerHTML = `
                <p>نام کاربر: ${user.first_name} ${user.last_name || ''}</p>
                <p>نام کاربری: ${user.username || 'ندارد'}</p>
                <p>شناسه کاربر: ${user.id}</p>
            `;
        } else {
            alert("اطلاعات کاربر در دسترس نیست.");
        }
    } else {
        alert("این وب اپلیکیشن باید در محیط تلگرام باز شود.");
    }
});