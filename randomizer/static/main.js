document.addEventListener("DOMContentLoaded", () => {
    console.log("content loaded");
})

function showInspo(inspo) {
    // Remove everything already in inspo
    inspo_div = document.getElementById("inspiration");
    inspo_div.innerHTML = "";

    // Grab from API
    fetch(`/api/${inspo}`)
    .then(response => response.json())
    .then(data => {

        console.log(data);
    
        if(inspo == "Music") {
            video = document.createElement("a");
            video.innerHTML = "Click me!" + "<br />" +  "(Don't worry, its safe)";
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
            video.style.textAlign = "center"; 
            video.classList.add("fade_in")
            video.href = data.content;
            inspo_div.appendChild(video);
        } else {
            image = document.createElement("img");
            image.src = data.content
            image.classList.add("fade_in");
            inspo_div.appendChild(image);
        }

    })
}
