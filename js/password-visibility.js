// js/password-visibility.js
function passwordVisibility() {
    const passwordInput = document.getElementById('password');
    const showPass = document.getElementById('showPass');
    const hidePass = document.getElementById('hidePass');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPass.classList.add('d-none');
        hidePass.classList.remove('d-none');
    } else {
        passwordInput.type = 'password';
        hidePass.classList.add('d-none');
        showPass.classList.remove('d-none');
    }
}
