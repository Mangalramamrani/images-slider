let images = document.getElementsByClassName("image");
if (images.length > 0) {
    images[0].classList.add("active");
}
Array.from(images).forEach(image => {
    image.addEventListener("click", () => {
        Array.from(images).forEach(img => img.classList.remove("active"));
        image.classList.add("active");
    });
});
