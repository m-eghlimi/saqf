<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SAQF Web App</title>

    <!-- فراخوانی کتابخانه تلگرام -->
    <script src="https://telegram.org/js/telegram-web-app.js"></script>

    <!-- لینک به فایل CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-logo">
        <img src="https://raw.githubusercontent.com/m-eghlimi/saqf/main/path/to/5859574370006057418.jpg" alt="logo">
    </div>
    <div class="profile-icon">
        <img id="telegram-profile" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Profile">
    </div>
    <div id="username" class="username-display">Username Text</div>

    <!-- ساختار پاپ آپ -->
    <div id="profile-popup" class="popup">
        <button class="close-btn">&times;</button>
        <div class="popup-content">
            <img id="popup-profile-img" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User Profile">
            <h3 id="popup-username">User Name</h3>
            <p>moheglimi@gmail.com</p>
            <input type="file" id="file-input" accept="image/*">
        </div>
    </div>

    <div class="container">
        <div class="MindContent"></div>
        <div class="MindContent"></div>
        <div class="MindContent"></div>
    </div>

    <!-- لینک به فایل JavaScript -->
    <script src="script.js"></script>
</body>
</html>