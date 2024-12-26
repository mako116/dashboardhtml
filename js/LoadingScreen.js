document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");

    // Timeout to hide the loading screen after 3 seconds
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Hide loading screen
        mainContent.style.display = "block";  // Show main content
    }, 2000); // 3000ms = 3 seconds

    // Optional: Add form submission behavior
    const signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent actual form submission

        // Simulate signup success
        const successMessage = document.getElementById("signup-success");
        successMessage.classList.remove("d-none");
    });
});
