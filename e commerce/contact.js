var nameError = document.getElementById("name-error")
var phoneError = document.getElementById("mobile-error")
var emailError = document.getElementById("email-error")
var addressError = document.getElementById("address-error")
var messageError = document.getElementById("message-error")


function dis() {
    var name = document.getElementById("name").value
    if (name.length == 0) {
        nameError.innerHTML = "Name is required"
        return false
    }
    if (name.match(/[A-Za-z]*\s{1}[A-Aa-z]*$/)) {
        nameError.innerHTML = "give your full Name"
        return false

    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}

function checks() {
    var phone = document.getElementById("mobile").value;
    var phoneError = document.getElementById("mobile-error");

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits accepted here';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function addresses() {
    var adres = document.getElementById("address").value
    var addressError = document.getElementById("address-error")

    if (adres.length == 0) {
        addressError.innerHTML = "please enter your address"
        return false
    }
    if (adres.length <= 15) {
        addressError.innerHTML = "please give me a proper address"
        return false

    }

    addressError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true
}
function emails() {
    var emai = document.getElementById("email").value
    var emailError = document.getElementById("email-error")

    if (emai.length == 0) {
        emailError.innerHTML = "email is required"
    }
    if (!emai.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email is invaild"
        return false
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true

}


function mess() {
    var comment = document.getElementById("textarea").value
    var messageError = document.getElementById("message-error")

    if (comment.length == 0) {
        messageError.innerHTML = "please give your opinion"
        return false
    }
    messageError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true

}


function btn() {
    var but = document.querySelectorAll(".btg")
    var error = document.getElementById("submit-error")

    if (!dis() || !checks() || !addresses() || !emails() || !mess())
    error.style.display = "block"
    error.innerHTML = "please fix the error"
    setTimeout(function () { error.style.display = "none" }, 3000)
    return false

}




var sidenav = document.querySelector(".side-navbar")

function shhow() {

    sidenav.style.display = "block"
    sidenav.style.left = "0"
}
function closee() {


    sidenav.style.left = "-60%"

}
