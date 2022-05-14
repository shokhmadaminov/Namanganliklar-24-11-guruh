const notificationBtn = document.getElementById("notification-btn")
const modalBg = document.getElementById("modal-bg")
const modalClose = document.querySelector(".modal-cancel")



notificationBtn.addEventListener("click", function() {
    modalBg.classList.remove("hidden")
})

modalClose.addEventListener("click", function() {
    modalBg.classList.add("hidden")
})

document.addEventListener("keydown", function(e) {
    if(e.keyCode == 27) {
        modalBg.classList.add("hidden")
    }
})

document.addEventListener("click", function(e) {
    console.log(e.target);
    if(e.target.classList == "modal-bg") {
        modalBg.classList.add("hidden")
    }
})

