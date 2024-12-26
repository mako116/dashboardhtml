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
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate login
    try {
      if (email === 'mako@gmail.com' && password === '123') {
        // Show success toast
        Toastify({
          text: "Login successful!",
          duration: 3000,
          gravity: "top", // Toast position: top
          position: "right", // Align to the right
          backgroundColor: "#4CAF50", // Green background
          className: "toast-success",
        }).showToast();

        // Redirect to the home page after showing the toast
        setTimeout(() => {
          window.location.href = 'home.html';
        }, 3000); // Delay to let the toast display
      } else {
        // Show error toast
        Toastify({
          text: "Invalid email or password.",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#F44336", // Red background
          className: "toast-error",
        }).showToast();

        errorMessage.classList.remove('hidden'); // Keep the error message visible
      }
    } catch (error) {
      // Show an error toast for unexpected issues
      Toastify({
        text: "An unexpected error occurred.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#F44336", // Red background
        className: "toast-error",
      }).showToast();

      errorMessage.textContent = 'An unexpected error occurred.';
      errorMessage.classList.remove('hidden');
    }
  });
});
