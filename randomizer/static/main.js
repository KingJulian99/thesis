document.addEventListener("DOMContentLoaded", () => {
    console.log("content loaded");

    addEventListeners();
})

function showInspo(inspo) {
    // Grab from API
    fetch(`/api/${inspo}`)
    .then(response => response.json())
    .then(data => console.log(data))
}
