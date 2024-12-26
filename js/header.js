
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    
    // Define data for the header elements
    const headerData = {
      title: 'Dashboard',
      buttons: [
        {
          id: 'hamburger',
          text: '&#9776;',
          class: 'block md:hidden text-2xl text-gray-800',
          type: 'button',
          action: 'toggleHamburger()',
        },
        {
          id: 'toggle-sidebar',
          text: '<span class="material-icons">menu</span>',
          class: 'text-[#000] text-xl hidden md:block',
          type: 'button',
          action: 'toggleSidebar()',
        },
      ],
      userProfile: {
        profileButton: {
          icon: 'account_circle',
          action: 'toggleProfileDropdown()',
        },
        dropdownMenu: [
          { text: 'Profile', action: 'goToProfile()' },
          { text: 'Logout', action: 'logoutUser()' },
        ],
      },
      notifications: {
        icon: 'notifications',
        action: 'viewNotifications()',
      },
    };
  
    // Function to create buttons
    const createButton = (buttonData) => {
      const button = document.createElement('button');
      button.id = buttonData.id;
      button.className = buttonData.class;
      button.innerHTML = buttonData.text;
      button.setAttribute('onclick', buttonData.action);
      return button;
    };
  
    // Function to create dropdown menu items
    const createDropdownItem = (item) => {
      const a = document.createElement('a');
      a.href = '#';
      a.className = 'block px-4 py-2 text-sm text-gray-800';
      a.textContent = item.text;
      a.setAttribute('onclick', item.action);
      return a;
    };
  
    // Title Section
    const titleDiv = document.createElement('div');
    titleDiv.className = 'flex items-center';
    
    // Add Buttons (Hamburger, Toggle Sidebar)
    headerData.buttons.forEach(buttonData => {
      titleDiv.appendChild(createButton(buttonData));
    });
  
    // Add Title
    const title = document.createElement('h1');
    title.className = 'text-2xl font-semibold ml-4';
    title.textContent = headerData.title;
    titleDiv.appendChild(title);
  
    // Add the Title section to the header
    header.appendChild(titleDiv);
  
    // User Profile & Notifications Section
    const userDiv = document.createElement('div');
    userDiv.className = 'flex items-center space-x-4';
  
    // Notifications Button
    const notificationsButton = document.createElement('button');
    notificationsButton.className = 'text-gray-600 hover:text-gray-800';
    notificationsButton.setAttribute('onclick', headerData.notifications.action);
    const notificationsIcon = document.createElement('span');
    notificationsIcon.className = 'material-icons';
    notificationsIcon.textContent = headerData.notifications.icon;
    notificationsButton.appendChild(notificationsIcon);
    userDiv.appendChild(notificationsButton);
  
    // Profile Button & Dropdown
    const profileDiv = document.createElement('div');
    profileDiv.className = 'relative';
  
    // Profile Button
    const profileButton = document.createElement('button');
    profileButton.id = 'profile-button';
    profileButton.className = 'text-gray-600 hover:text-gray-800';
    profileButton.setAttribute('onclick', headerData.userProfile.profileButton.action);
    const profileIcon = document.createElement('span');
    profileIcon.className = 'material-icons';
    profileIcon.textContent = headerData.userProfile.profileButton.icon;
    profileButton.appendChild(profileIcon);
  
    // Profile Dropdown Menu
    const profileDropdown = document.createElement('div');
    profileDropdown.id = 'profile-dropdown';
    profileDropdown.className = 'absolute right-0 bg-white shadow-lg rounded-md w-40 mt-2 p-2 hidden';
    
    headerData.userProfile.dropdownMenu.forEach(item => {
      profileDropdown.appendChild(createDropdownItem(item));
    });
  
    // Append Profile Button and Dropdown to Profile Section
    profileDiv.appendChild(profileButton);
    profileDiv.appendChild(profileDropdown);
    userDiv.appendChild(profileDiv);
  
    // Append User Section to Header
    header.appendChild(userDiv);
  });
  