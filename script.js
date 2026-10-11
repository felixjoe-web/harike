document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("openMessage");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {

        message.classList.remove("hidden");

        button.textContent = "💗 Message Opened!";

        button.disabled = true;

    });

});