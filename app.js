// JavaScript to handle centered image display on click
document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close");

    // Show modal with centered image on thumbnail click
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            modal.style.display = "flex"; // Changed to flex for centering
            modalImage.src = thumbnail.src;
            captionText.textContent = thumbnail.alt;
        });
    });

    // Close modal when 'X' is clicked
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
