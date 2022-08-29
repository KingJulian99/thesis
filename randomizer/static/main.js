document.addEventListener("DOMContentLoaded", () => {
    console.log("content loaded");

    addEventListeners();
})

function addEventListeners() {
    buttons = document.getElementsByClassName("choice_button");
    console.log(buttons);

    for(let button in buttons) {
        console.log(button);
    }
}

function showInspo(element) {
    alert(element.id);
}
