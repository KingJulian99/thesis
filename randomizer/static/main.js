document.addEventListener("DOMContentLoaded", () => {
    console.log("content loaded");
})

function showInspo(inspo) {
    // Grab from API
    fetch(`/api/${inspo}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        inspo_div = document.getElementById("inspiration");
        if(inspo == "Music") {
            video = document.createElement("a");
            video.innerHTML = "Click me!";
            video.target = "_blank";
            video.style.paddingLeft = "4rem";
            video.style.paddingRight = "4rem";
            video.style.paddingTop = "2rem";
            video.style.paddingBottom = "2rem";
            video.style.marginTop = "2rem";
            video.style.border = "1px black solid";
            video.style.borderRadius = "2rem";
            video.style.fontWeight = "bold";
            video.style.background = "lightblue";
            video.href = data.content;
            inspo_div.appendChild(video);
        }
    })
}
