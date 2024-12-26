document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
  
    forgotPasswordForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const email = document.getElementById('email').value;
  
      // Simulate email validation
      if (email === 'mako@gmail.com') {
        // Show success toast
        Toastify({
          text: "Password reset email sent successfully!",
          duration: 3000,
          gravity: "top", // Position of toast
          position: "right",
          backgroundColor: "#4CAF50", // Green
        }).showToast();
        setTimeout(() => {
          window.location.href = 'forgottenpassword.html';
        }, 1000); // Delay to let the toast display
      } else {
        // Show error toast
        Toastify({
          text: "Email not found. Please try again.",
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#F44336", // Red
        }).showToast();
      }
    });
  });
  