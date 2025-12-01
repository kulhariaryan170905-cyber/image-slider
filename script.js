
let images = [
    "image/1.jpg",
    "image/2.jpg",
    "image/3.jpg",
    "image/4.jpg"
];

let currentIndex = 0;

let slider = document.getElementById("sliderImage");

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }

    slider.src = images[currentIndex];
}

function prevImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; 
    }

    slider.src = images[currentIndex];
}
