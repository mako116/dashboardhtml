document.addEventListener('DOMContentLoaded', () => {
    // Initialize slider with infinite scrolling
    const slider = document.querySelector('.slider');
    if (slider) {
      $(slider).slick({
        dots: true,
        infinite: true, // Infinite looping
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, // Enables arrow navigation
      });
    }
  
    // Password toggle functionality with icons
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    togglePasswordBtn.addEventListener('click', () => {
      const type = passwordInput.type === 'password' ? 'text' : 'password';
      passwordInput.type = type;
  
      // Toggle the icon based on the type
      const icon = togglePasswordBtn.querySelector('i');
      if (type === 'password') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
    });
  
    // Form submission
    const signupForm = document.getElementById('signupForm');
    const errorMessage = document.getElementById('error');
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const firstName = document.getElementById('firstName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // Simulate signup
      try {
        // Simple validation (You can expand this as needed)
        if (!firstName || !email || !password) {
          errorMessage.textContent = 'All fields are required.';
          errorMessage.classList.remove('hidden');
          return;
        }
  
        // You can add more validation for the email format or password strength here.
  
        // Show a success toast notification
        Toastify({
          text: "Signup successful!",
          duration: 3000,
          gravity: "top", // Position at the top
          position: "right", // Align to the right
          backgroundColor: "#4CAF50", // Green for success
          className: "toast-success",
        }).showToast();
  
        // Redirect after showing the toast
        setTimeout(() => {
          window.location.href = 'index.html'; // Redirect to a welcome page or dashboard
        }, 3000); // Delay to allow the toast to display
      } catch (error) {
        // Show an error toast notification
        Toastify({
          text: "An unexpected error occurred.",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#F44336", // Red for error
          className: "toast-error",
        }).showToast();
      }
    });
  });
  