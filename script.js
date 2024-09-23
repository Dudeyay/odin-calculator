function displayValue(e, display) {
    if (e.target.tagName === 'BUTTON') {
        display.innerHTML += e.target.innerHTML;
    }
}

const display = document.querySelector("div.display");
const digits = document.querySelector(".digits");
digits.addEventListener("click", function(e) {
    displayValue(e, display)
});