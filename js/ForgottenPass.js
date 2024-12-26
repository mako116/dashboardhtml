document.addEventListener('DOMContentLoaded', () => {
    const resetPasswordForm = document.getElementById('resetPasswordForm');
    const errorMessage = document.getElementById('error'); // Ensure this exists in the HTML for error feedback
  
    resetPasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      // Check if the passwords match
      if (password === confirmPassword) {
        Toastify({
          text: "Password set successfully!",
          duration: 3000,
          gravity: "top", // Toast position: top
          position: "right", // Align to the right
          backgroundColor: "#4CAF50", // Green background
          className: "toast-success",
        }).showToast();
  
        // Redirect to login page after a successful reset
        setTimeout(() => {
          window.location.href = 'index.html'; // Redirect to login page
        }, 3000); // Delay to allow toast to appear
      } else {
        // Show error toast and error message if passwords do not match
        Toastify({
          text: "Passwords do not match. Please try again.",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#F44336", // Red background
          className: "toast-error",
        }).showToast();
  
        // Display the error message in the form
        if (errorMessage) {
          errorMessage.textContent = 'Passwords do not match.';
          errorMessage.classList.remove('hidden');
        }
      }
    });
  });
  