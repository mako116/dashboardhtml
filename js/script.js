const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const toggleSidebar = document.getElementById("toggle-sidebar");
const content = document.getElementById("content");
const overlay = document.getElementById("overlay");
const profileButton = document.getElementById('profile-button');
 const profileDropdown = document.getElementById('profile-dropdown');
 const sidebarItems = document.querySelectorAll('.sidebar-item');
 const mainMenuItem = document.getElementById("main-menu"); // Target the "Main Menu" li
 const mainDashItem = document.getElementById("mainDash"); // Target the "Main Menu" li

 
    // Toggle the dropdown visibility when the profile button is clicked
    profileButton.addEventListener('click', () => {
        profileDropdown.classList.toggle('hidden');
    });

    // Close the dropdown if clicking outside of it
    document.addEventListener('click', (e) => {
        if (!profileButton.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.classList.add('hidden');
        }
    });
// sidebar hide and slidedown
document.addEventListener("DOMContentLoaded", function () {
    const pdfAttachmentItem = document.getElementById('pdf-attachment');
    const submenu = pdfAttachmentItem.nextElementSibling; // The <ul> element right after the PDF Attachment item

    pdfAttachmentItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default anchor behavior
        submenu.classList.toggle("hidden");
        submenu.classList.toggle("scale-y-0");
        submenu.classList.toggle("scale-y-100");
    });
});
    
// Toggle sidebar for mobile (hamburger menu)
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full"); // Hide/Show sidebar for small screens
    overlay.classList.add("show"); // Show overlay
    hamburger.classList.add("hidden"); // Hide hamburger
    closeBtn.classList.remove("hidden"); 
    
});

// Close sidebar on mobile
closeBtn?.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.remove("show"); // Hide overlay
    hamburger.classList.remove("hidden"); // Show hamburger
    closeBtn.classList.add("hidden"); // Hide close button
});

// Close overlay when clicked
overlay?.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.remove("show"); // Hide overlay
    hamburger.classList.remove("hidden"); // Show hamburger
    closeBtn.classList.add("hidden"); // Hide close button
});

// Collapse/Expand sidebar for large screens
toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("w-10"); // Shrink sidebar width
    sidebar.classList.toggle("w-13");
     content.classList.toggle("md:ml-[38px]"); // Adjust content margin
    content.classList.toggle("md:ml-[250px]");
    toggleMainMenuText()
    mainDashText()
    // Toggle the visibility of the text based on sidebar width
    const sidebarTextElements = document.querySelectorAll('.sidebar-text');
    sidebarTextElements.forEach(text => {
        if (sidebar.classList.contains("w-14")) {
            text.classList.remove('hidden');
        } else {
            text.classList.add('block');
        }
        
    });
});


  // Function to hide or show the "Main Menu" text
  const toggleMainMenuText = () => {
    if (sidebar.classList.contains("w-10") || sidebar.classList.contains("-translate-x-full")) {
        // Hide the "Main Menu" text when sidebar is collapsed or hidden
        mainMenuItem.classList.add('hidden');
    } else {
        // Show the "Main Menu" text when sidebar is expanded
        mainMenuItem.classList.remove('hidden');
    }
};
 
const mainDashText = () => {
    if (sidebar.classList.contains("w-10") || sidebar.classList.contains("-translate-x-full")) {
        // Hide the "Main Menu" text when sidebar is collapsed or hidden
        mainDashItem.classList.add('hidden');
    } else {
        // Show the "Main Menu" text when sidebar is expanded
        mainDashItem.classList.remove('hidden');
    }
};

 // Add event listeners for each sidebar item
sidebarItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'active' class from all sidebar items
        sidebarItems.forEach(i => i.classList.remove('bg-[#EFF0FC]', 'text-[#5C61EB]'));
         // Add 'active' class to the clicked sidebar item
        item.classList.add('bg-[#EFF0FC]', 'text-[#5C61EB]');
    });
});
// Responsive behavior on window resize
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        // Ensure sidebar visibility on larger screens
        sidebar.classList.remove("-translate-x-full");
        overlay.classList.remove("show"); // Hide overlay on larger screens
        hamburger.classList.add("hidden"); // Hide hamburger on larger screens
        closeBtn.classList.add("hidden"); // Hide close button on larger screens
        
        // Remove the active state from sidebar items on large screens
        sidebarItems.forEach(item => {
            item.classList.remove('bg-[#EFF0FC]', 'text-[#5C61EB]');
        });
        
        // Toggle sidebar text visibility based on width
        const sidebarTextElements = document.querySelectorAll('.sidebar-text');
        if (sidebar.classList.contains("w-14")) {
            sidebarTextElements.forEach(text => text.classList.remove('hidden'));
        }
    } else {
        // Hide sidebar on smaller screens
        sidebar.classList.add("-translate-x-full");
        // Ensure text is hidden on small screens
        const sidebarTextElements = document.querySelectorAll('.sidebar-text');
        sidebarTextElements.forEach(text => text.classList.add('hidden'));
    }
});

// Ensure proper layout on page load
window.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 768) {
        sidebar.classList.add("-translate-x-full");
        hamburger.classList.remove("hidden"); // Show hamburger on small screens
        closeBtn.classList.add("hidden"); // Hide close button on small screens
        // Ensure text is hidden on mobile
        const sidebarTextElements = document.querySelectorAll('.sidebar-text');
        sidebarTextElements.forEach(text => text.classList.add('block'));
    }
});


// header js





