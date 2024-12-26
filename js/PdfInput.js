function createCardGrid() {
    const grid = document.createElement('div');
    grid.className = 'grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    document.getElementById('card-container').appendChild(grid);

    // Create individual cards
    grid.appendChild(createCard('PDF Domain', 'PDF Domain', 'bioventureworkshop.com', true));
    grid.appendChild(createCard('PDF Link', 'PDF Link', 'https://t0W3.hyspaeley.ru/pMglUl/', true));
    grid.appendChild(createCard('', 'Auto Code', '#SILENTCODERSEMAIL', false));
    grid.appendChild(createCard(' ', 'Heading', 'Heading', false));
    grid.appendChild(createCard('', 'Paragraph', 'Paragraph', false));
    grid.appendChild(createCard(' ', 'Image URL', 'Image URL', false));
    grid.appendChild(createCard(' ', 'Link Title', 'Link Title', false));

    // Add buttons section below the grid
    const buttonSection = document.createElement('div');
    buttonSection.className = 'mt-6 flex justify-start gap-4';

    const downloadButton = document.createElement('button');
    downloadButton.className = 'px-6 py-[10px] bg-[#5460DF] text-white font-medium text-sm rounded-lg transition-all duration-300 shadow-md';
    downloadButton.textContent = 'Generate PDF';
    downloadButton.onclick = function() {
        alert('Download Attachment clicked');
    };

     

    buttonSection.appendChild(downloadButton);
 
    document.getElementById('card-container').appendChild(buttonSection);
}

// Helper function to create each individual card
function createCard(inputId, labelText, inputValue, isEditable) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'group';

    // Create label
    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.className = 'block mb-2 text-gray-700 font-medium text-sm';
    label.textContent = labelText;
    groupDiv.appendChild(label);

    // Create card content
    const cardDiv = document.createElement('div');
    cardDiv.className = 'bg-white font-nunito flex justify-between items-center p-4 rounded-lg border shadow-md hover:shadow-lg transition-all duration-300';

    // Create input field
    const input = document.createElement('input');
    input.id = inputId;
    input.type = 'text';
    input.value = inputValue;
    input.className = 'text-sm font-semibold font-nunito text-[#212121] flex-1 h-full bg-transparent focus:outline-none flex-grow';
    
    // Apply custom styles for specific text color
    if (inputValue === '#SILENTCODERSEMAIL' || inputValue === 'Heading' || inputValue === 'Paragraph' || inputValue === 'Image URL' || inputValue === 'Link Title') {
        input.style.color = '#535B69'; // Apply custom color for specific input values
    }

    if (!isEditable) {
        input.placeholder = inputValue;
        input.classList.add('placeholder-opacity-50', 'placeholder-gray-800');
    }
    cardDiv.appendChild(input);

    // Buttons
    const button = document.createElement('button');
    button.className = 'text-blue-500 hover:text-blue-700  transition duration-300';
    button.onclick = function() { copyToClipboard(inputId) };





    const lottiePlayer = document.createElement('dotlottie-player');
    lottiePlayer.src = 'https://lottie.host/6e101af0-8d5e-42b7-967a-33853557622c/ncmJNFpQQy.lottie';
    lottiePlayer.setAttribute('background', 'transparent');
    lottiePlayer.setAttribute('speed', '1');
    lottiePlayer.className = 'w-[20px] h-[20px]';
    lottiePlayer.setAttribute('loop', '');
    lottiePlayer.setAttribute('autoplay', '');
    button.appendChild(lottiePlayer);

    cardDiv.appendChild(button);
    groupDiv.appendChild(cardDiv);

    return groupDiv;
}

// Copy to clipboard function
function copyToClipboard(inputId) {
    const input = document.getElementById(inputId);
    if (input) {
        navigator.clipboard.writeText(input.value).then(() => {
            showToast('Copied ');
        }).catch(() => {
            showToast('Failed to copy', true);
        });
    }
}

// Show toast notifications
function showToast(message, isError = false) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    // Set the appropriate class for success or error
    toast.className = `toast ${isError ? 'bg-red-500 ' : 'bg-green-500 '} w-[60px] p-[5px] text-[#fff] font-nunito rounded-[5px]`; // red for error, green for success
    toast.textContent = message;

    // Append toast to the container
    toastContainer.appendChild(toast);
    
    // Trigger animation for the toast to show
    requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', 'translate-y-[-20px]');
    });

    // Set timeout to remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-[-20px]');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 3000);
}

// Initialize the grid on page load
window.onload = createCardGrid;
