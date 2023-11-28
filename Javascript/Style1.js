// getInfo_page

function toggleseePassword(inputId) {
    const passwordInput = document.getElementById(inputId);

    var toggleButton = document.getElementById('toggle' + capitalizeFirstLetter(inputId));

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.src = './sass/assets/Image/password icon/close-eye-icon.png';
    }

    else {
        passwordInput.type = 'password';
        toggleButton.src = './sass/assets/Image/password icon/open-eye-icon.png';
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function validatePassword(password) {

    const containsAllChars = /(?=.*[a-zA-Z])(?=.*\d)(.*[#&()*$])/;
    return containsAllChars.test(password);
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {

    const passwordInput = document.getElementById("password");

    if (!validatePassword(passwordInput.value)) {
        e.preventDefault();
        document.getElementById("passAlert").innerHTML = 'Password must be more than 8 and contain a letter, a number, and characters (#,&,*,$,()).';
    }

    let password = passwordInput.value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;
    if (password !== confirmPassword) {
        e.preventDefault();
        document.getElementById("confirm_passAlert").innerHTML = 'Password do not match'
    }
});

function popUp() {
    let popup = document.getElementById('Popup_section');

    if (popup.style.display === "block") {
        popup.style.display = "none";
    }
    else {
        popup.style.display = "block";
    }
}
