let el_name = document.getElementById("name")
let email = document.getElementById("email")
let pass = document.getElementById("pass")
let gender = document.querySelectorAll("[type=radio]")
let sports = document.querySelectorAll("[type=checkbox]")
let country = document.querySelector(".country")
let submit = document.querySelector("[type=submit]")
let checkName = false
let checkEmail = false
let checkPasswprd = false
let sportsarr = []
let checkgender
let counter = ""
el_name.addEventListener("keyup", function (e) {
    if (e.target.value !== "" && /\b([A-ZÀ-ÿ][-,a-z.']+[ ]*)+/gi.test(e.target.value)) {
        checkName = true
        document.getElementById("name-error").style.display = "none"

        console.log("su");
        console.log(checkName);

    } else {
        console.log("fa");

        checkName = false
        document.getElementById("name-error").style.display = "block"
        console.log(checkName);

    }
})
email.addEventListener("keyup", function (e) {
    if (e.target.value !== "" && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e.target.value)) {
        checkEmail = true
        document.getElementById("email-error").style.display = "none"
        console.log("su");
        console.log(checkEmail);
    } else {
        console.log("fa");
        checkEmail = false
        document.getElementById("email-error").style.display = "block"
        console.log(checkEmail);

    }
})
pass.addEventListener("keyup", function (e) {
    if (e.target.value !== "" && /\w{8,}/.test(e.target.value)) {
        checkPasswprd = true
        document.getElementById("pass-error").style.display = "none"
        console.log("su");
        console.log(checkPasswprd);

    } else {
        console.log("fa", /\w{8,}/.test(e.target.value), e.target.value);

        checkPasswprd = false
        document.getElementById("pass-error").style.display = "block"
        console.log(checkPasswprd);

    }
})
/* 
gender.forEach((elemnt) => {
    elemnt.addEventListener("click", function (e) {
        checkgender = e.target.value

        if (checkgender) {
            document.getElementById("gender-error").style.display = "none"
            console.log(checkgender);
        } else {
            checkgender = e.target.value
            document.getElementById("gender-error").style.display = "block"
            console.log(checkgender);

        }
    })
}) */
/* 
sports.forEach((elemnt) => {
    elemnt.addEventListener("click", function (e) {
        if (e.target.checked) {
            sportsarr.push(e.target.value)
            console.log(sportsarr);
        } else {

            let temp = []
            temp = sportsarr.filter(el => {
                return el !== e.target.value
            })
            sportsarr = temp
            console.log(sportsarr);
        }
        if (sportsarr.length < 2) {
            document.getElementById("sports-error").style.display = "block"
        } else {
            document.getElementById("sports-error").style.display = "none"

        }
    })
}) *//* 
country.addEventListener("click", function (e) {
    if (e.target.value === "country") {
        document.getElementById("count-error").style.display = "block"

    } else {
        document.getElementById("count-error").style.display = "none"
        country = e.target.value
        console.log(country);

    }
}) */
document.forms[0].onsubmit = function (e) {

    if (checkName === false || checkEmail === false || checkPasswprd === false) {
        e.preventDefault();
        console.log("error", checkPasswprd, checkEmail, checkName, sportsarr.length);
        alert("missing info")

    } else {
        console.log(e);
    }

}