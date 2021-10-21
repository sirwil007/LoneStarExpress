const btn = document.querySelector(".burg button")
const navigation = document.querySelector(".nav-mobile")
let clicked = false




btn.addEventListener("click", () => {
    if (clicked) {
        navigation.style.display = "none"
        clicked = false
    } else {
        navigation.style.display = "flex"
        clicked = true
    }

})