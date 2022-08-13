const input = document.querySelector(".input")
const button = document.querySelector(".button")
const heading = document.querySelector(".heading")

button.addEventListener("click", function (evt) {
    evt.preventDefault();


    if (input.value == 1) {
        heading.textContent = "Dushanba";
    } else if (input.value == 2) {
        heading.textContent = "Seshanba";
    } else if (input.value == 3) {
        heading.textContent = "Chorshanba";
    } else if (input.value == 4) {
        heading.textContent = "Payshanba";
    } else if (input.value == 5) {
        heading.textContent = "Juma";
    } else if (input.value == 6) {
        heading.textContent = "Shanba";
    } else if (input.value == 7) {
        heading.textContent = "Yakshanba";
    } else {
        heading.textContent = "1dan 7 gacha kirgizing";
    }

    input.value = "";
})