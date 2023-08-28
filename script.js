// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });
    
    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    }
});
// Image slider functionality
document.addEventListener("DOMContentLoaded", function() {
    const sliderImages = document.querySelectorAll(".image-slider img");
    let currentSlide = 0;

    function showSlide(slideIndex) {
        sliderImages.forEach(image => {
            image.style.display = "none";
        });

        sliderImages[slideIndex].style.display = "block";
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    }

    // Show the initial slide
    showSlide(currentSlide);

    // Set up interval for automatic slide change
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
