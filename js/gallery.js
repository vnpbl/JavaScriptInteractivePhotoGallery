/*Name this external file gallery.js*/
function upDate(previewPic) {
    let displayBox = document.getElementById("image");
    displayBox.style.backgroundImage = `url('${previewPic.src}')`;
    displayBox.innerHTML = previewPic.alt;
    console.log(`Updated image: ${previewPic.alt}`);
}

function unDo() {
    let displayBox = document.getElementById("image");
    displayBox.style.backgroundImage = "url('')";
    displayBox.innerHTML = "Hover over an image below to display here.";
    console.log("Image reset.");
}

// Add tabindex dynamically & event listeners
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page loaded. Adding event listeners...");
    let images = document.querySelectorAll(".preview");

    images.forEach(img => {
        img.setAttribute("tabindex", "0"); // Makes images focusable via keyboard

        img.addEventListener("mouseover", function() { upDate(this); });
        img.addEventListener("focus", function() { upDate(this); });

        img.addEventListener("mouseout", unDo);
        img.addEventListener("blur", unDo);
    });
});
