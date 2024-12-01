document.addEventListener("DOMContentLoaded", () => {
    // Элементы
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const registerLink = document.getElementById("register-link");
    const loginLink = document.getElementById("login-link");

    const togglePassword = document.getElementById("toggle-password");
    const passwordField = document.getElementById("password");

    const toggleNewPassword = document.getElementById("toggle-new-password");
    const newPasswordField = document.getElementById("new-password");

    const confirmPasswordField = document.getElementById("confirm-password");
    const registerButton = document.getElementById("register-btn");

    // Переключение между формами
    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });

    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    // Показать/скрыть пароль
    togglePassword.addEventListener("mousedown", () => (passwordField.type = "text"));
    togglePassword.addEventListener("mouseup", () => (passwordField.type = "password"));
    togglePassword.addEventListener("mouseout", () => (passwordField.type = "password"));

    toggleNewPassword.addEventListener("mousedown", () => (newPasswordField.type = "text"));
    toggleNewPassword.addEventListener("mouseup", () => (newPasswordField.type = "password"));
    toggleNewPassword.addEventListener("mouseout", () => (newPasswordField.type = "password"));

    // Регистрация: проверка совпадения паролей
    registerButton.addEventListener("click", () => {
        const newPassword = newPasswordField.value;
        const confirmPassword = confirmPasswordField.value;

        if (newPassword !== confirmPassword) {
            alert("Пароли не совпадают!");
        } else {
            alert("Регистрация прошла успешно!");
        }
    });

    // Telegram Web App: работа с контекстом
    if (window.Telegram && window.Telegram.WebApp) {
        const telegram = window.Telegram.WebApp;
        telegram.expand();
        console.log("Пользователь в Telegram: ", telegram.initDataUnsafe.user);
    }
});
