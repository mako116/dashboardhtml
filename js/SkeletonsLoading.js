function showSkeletonLoader() {
    const signupContainer = document.getElementById("signup-container");
    const skeletonHTML = `
       <div class="w-[300px] h-[300px]">
        <div class="skeleton text mb-3 h-[300px]"></div>
        <div class="skeleton text mb-3"></div>
        <div class="skeleton button"></div>
       </div>
    `;
    signupContainer.innerHTML = skeletonHTML;
    signupContainer.style.display = "block";

    // Simulate skeleton loading
    setTimeout(() => {
        signupContainer.innerHTML = `
            <h2 class="text-center mb-4">Sign Up</h2>
            <form id="signup-form">
                <div class="mb-3">
                    <label for="new-username" class="form-label">Username</label>
                    <input type="text" id="new-username" class="form-control" placeholder="Enter a username" required>
                </div>
                <div class="mb-3">
                    <label for="new-password" class="form-label">Password</label>
                    <input type="password" id="new-password" class="form-control" placeholder="Enter a password" required>
                </div>
                <button type="submit" class="btn btn-success w-100">Sign Up</button>
                <p id="signup-success" class="text-success mt-3 text-center d-none">Signup successful!</p>
            </form>
            <p class="text-center mt-3">Already have an account? <a href="index.html">Login</a></p>
        `;
    }, 2000); // 2 seconds
}
