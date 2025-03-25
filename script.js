console.log("Welcome to Interior Design Website!");

document.querySelector("form").addEventListener("submit", (event) => {
    const name = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const subject = document.querySelector("input[name='subject']").value.trim();
    const message = document.querySelector("textarea[name='message']").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
    } else {
        alert("Thank you for contacting us! We will get back to you soon.");
    }
});


const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// JavaScript for Explore Designs button navigation
document.getElementById('exploreButton').addEventListener('click', function () {
    window.location.href = 'gallery.html'; 
});

