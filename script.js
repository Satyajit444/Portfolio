const menuToggle = document.querySelector(".menu-box")
const close = document.querySelector(".close")
const sideBar = document.querySelector(".sidebar")
const body = document.querySelector(".contents-box")
const list = document.querySelectorAll("li")

menuToggle.onclick = () => {
    sideBar.style.right = "0px"
}

close.onclick = () => {

    sideBar.style.right = "-250px"

}
body.onclick = () => {
    sideBar.style.right = "-250px"
}
list.onclick = () => {
    sideBar.classList.toggle(".nav")

}

// ---------------[ Form Validation ]

const userName = document.querySelector("#user")
const password = document.querySelector("#password")
const textBox = document.querySelector('#textbox')
const reset = document.querySelector('.reset')
let flag = 1;

reset.onclick = () => {
    userName.innerHTML = "";
    password.innerHTML = "";
    textBox.innerHTML = "";
}

function validateForm() {
    if (userName.value == "") {
        document.getElementById('userError').innerHTML = "Please enter the user name...";
        flag = 0;

    } else if (userName.value.length <= 3) {
        document.getElementById('userError').innerHTML = "username required more than 3 character.";
        flag = 0;


    } else if (password.value == "") {

        document.getElementById('userError').innerHTML = "Enter the email.";




    } else if (textBox.value == "") {

        document.getElementById('userError').innerHTML = "Message box is empty";
    } else if (textBox.value.length <= 10) {

        document.getElementById('userError').innerHTML = "Message box required minimum of 10 letters.";
    } else {
        document.getElementById('userError').innerHTML = " ";
        flag = 1;


    }


    if (flag) {
        return true;
    } else {
        return false;
    }


}