document.addEventListener("DOMContentLoaded", () => {
    console.log("content loaded");

    addEventListeners();
})

function showInspo(inspo) {
    // Grab from API
    fetch(`/api/${inspo}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        inspo_div = document.getElementById("inspiration");
        if(inspo == "Music") {
            video = document.createElement("iframe");
            video.src = data.content;
            inspo_div.appendChild(video);
        }
    })
}
