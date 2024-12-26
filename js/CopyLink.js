function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
}

// Copy to clipboard function
function copyToClipboard(content) {
    navigator.clipboard.writeText(content).then(() => {
        showToast('Copied');
    }).catch(() => {
        showToast('Failed to copy', true);
    });
}

// Show toast notifications
function showToast(message, isError = false) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    
    toast.className = `toast ${isError ? 'bg-red-500 ' : 'bg-green-500 '} w-[60px] p-[5px] text-[#fff] font-nunito rounded-[5px]`;
    toast.textContent = message;

    toastContainer.appendChild(toast);
    
    // Trigger animation for toast to show
    requestAnimationFrame(() => {
        toast.classList.remove('opacity-0', 'translate-y-[-20px]');
    });

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-[-20px]');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 3000);

}

const domains = [
    { value: "0", text: "conceptfind.com" },
    { value: "1", text: "ussolarpowers.com" },
    { value: "2", text: "nationalchristianplayfestival.com" },
    { value: "3", text: "kelmeteam.com" },
    { value: "4", text: "zoominab.com" },
    { value: "5", text: "nudelaw.com" },
    { value: "6", text: "artistandtheangler.com" },
    { value: "7", text: "meymeze.com" },
    { value: "8", text: "goodpressjuicery.com" },
    { value: "9", text: "cosmicclover.com" },
    { value: "10", text: "wispadviser.com" },
    { value: "11", text: "nutech.consulting" },
    { value: "12", text: "wisptrader.com" },
    { value: "13", text: "zplats.se" },
    { value: "14", text: "jfingerworks.com" },
    { value: "15", text: "fazendaviva.com" },
    { value: "16", text: "leizethedayabroad.com" },
    { value: "17", text: "assistaway.com.au" },
    { value: "18", text: "useiedai.com.br" },
    { value: "19", text: "ruppyconstruction.com" },
    { value: "20", text: "homefromhomecarehomes.com" },
    { value: "21", text: "nolongerdreaming.net" },
    { value: "22", text: "ladisneyfan.com" },
    { value: "23", text: "bonghornbakehouse.com" },
    { value: "24", text: "mosquitoms.com" },
    { value: "25", text: "kristinachildress.com" },
    { value: "26", text: "studiothreellc.com" },
    { value: "27", text: "lilakahn.com" },
    { value: "28", text: "netbrello.com" },
    { value: "29", text: "kkcsonsultingservices.com" },
    { value: "30", text: "marxian.io" }
];

// Function to toggle the dropdown visibility
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
}

// Function to populate the dropdown with the domains
function populateDropdown() {
    const dropdownContent = document.getElementById('dropdown-content');

    // Clear any existing options
    dropdownContent.innerHTML = '';

    // Add the options from the domains array as clickable list items
    domains.forEach(domain => {
        const option = document.createElement('button');
        option.classList.add('w-full', 'text-left', 'text-sm', 'font-[400]','font-poppins', 'text-[#212121]', 'hover:bg-gray-100', 'px-4', 'py-2','leading-[14px]');
        option.textContent = domain.text;
        option.onclick = function() {
            updateDropdownLabel(domain.text);
            toggleDropdown('dropdown-content');
        };
        dropdownContent.appendChild(option);
    });
}

// Function to update the dropdown label when an option is selected
function updateDropdownLabel(selectedOption) {
    const dropdownLabel = document.getElementById('dropdown-label');
    dropdownLabel.textContent = selectedOption;
}

// Populate the dropdown when the page loads
window.onload = populateDropdown;