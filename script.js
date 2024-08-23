document.getElementById('get-user-info').addEventListener('click', function() {
    Telegram.WebApp.ready(); // آماده‌سازی وب اپ تلگرام

    // دریافت اطلاعات کاربر از تلگرام
    const userInfo = Telegram.WebApp.initDataUnsafe.user;

    // نمایش اطلاعات کاربر
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = `
        <p>نام کاربر: ${userInfo.first_name} ${userInfo.last_name || ''}</p>
        <p>نام کاربری: ${userInfo.username || 'ندارد'}</p>
        <p>شناسه کاربر: ${userInfo.id}</p>
    `;
});