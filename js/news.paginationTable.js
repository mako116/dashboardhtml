let currentPage = 1;
let totalPages = 4;
const rowsPerPage = 5;

function updateTable() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const rows = []; 
  
  // Example data
  const data = [
    { id: 1, text: 
      "Hello! 😊All attachments are updated, and everything has been delivered to the inbox. 📩1️⃣ If you want to send directly, use the online attachment. 2️⃣ If you'd like to upload to any host, use the offline attachment or index.html.✨ All URLs have been updated, and fresh URLs have been added! ✨🎉 We're excited to announce a new feature: 'Change Title'! Now, you can easily change the title of your page. 🎨Check out the video using the link below for more details: 🎥🔗 https://www.veed.io/view/a37f0459-a2b0-4ba6-aaaa-8df9dc734770?panel=sh",
 date: "Sun, Dec 15, 2024,  2024-01-01" },
    { id: 2, text: "dolor sit  consectetur", date: "Sun, Dec 15, 2024,  2024-01-02" },
    { id: 3, text: "sit  consectetur adipisicing", date: "Sun, Dec 15, 2024,  2024-01-03" },
    { id: 4, text: " consectetur adipisicing elit", date: "Sun, Dec 15, 2024,  2024-01-04" },
    { id: 5, text: "consectetur adipisicing elit dolor", date: "Sun, Dec 15, 2024,  2024-01-05" },
    { id: 6, text: "ipsum dolor sit  consectetur", date: "Sun, Dec 15, 2024,  2024-01-06" },
    { id: 7, text: "elit  dolor sit", date: "Sun, Dec 15, 2024,  2024-01-07" },
    { id: 8, text: " consectetur elit dolor", date: "Sun, Dec 15, 2024,  2024-01-08" },
    { id: 9, text: "dolor sit  elit", date: "Sun, Dec 15, 2024,  2024-01-09" },
    { id: 10, text: "consectetur elit dolor ", date: "Sun, Dec 15, 2024,  2024-01-10" }
  ];

  const filteredRows = data.filter(row =>
    row.text.toLowerCase().includes(searchQuery)
  );

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageRows = filteredRows.slice(startIndex, endIndex);

  const tableBody = document.getElementById('table-body');
  tableBody.innerHTML = '';

  if (pageRows.length === 0) {
    const noResultsRow = document.createElement('tr');
    noResultsRow.innerHTML = `
      <td colspan="4" class="py-4 text-center text-gray-500 mx-auto">
         <dotlottie-player src="https://lottie.host/40e9b6ed-5bbd-4ac7-ac3f-eebcaa612b00/zDlNBLuORq.lottie" background="transparent" speed="1" class="flex justify-center mx-auto h-[300px]" loop autoplay></dotlottie-player>
      </td>  
      `;
    tableBody.appendChild(noResultsRow);
  } else {
  pageRows.forEach(row => {
    const rowElement = document.createElement('tr');
    rowElement.innerHTML = `
      <tr class="bg-[#f7f6f6] hover:bg-gray-100 transition-colors duration-300">
        <td class="py-4 px-4 border-b">
          <input type="checkbox" class="select-row cursor-pointer" onclick="toggleRowBackground(event)">
        </td>
        <td class="py-4 px-4 border-b text-center text-sm font-medium  text-[#212121]">${row.id}</td>
        <td class="py-4 px-6 border-b text-left text-sm font-medium text-[#212121]">${row.text}</td>
        <td class="py-4  border-b text-right text-sm font-medium text-[#212121]">${row.date}</td>
      </tr>
    `;
    tableBody.appendChild(rowElement);
  });
  }
  updatePagination(filteredRows.length);
}

function toggleRowBackground(event) {
  const row = event.target.closest('tr');
  if (event.target.checked) {
    row.classList.add('bg-blue-100');
  } else {
    row.classList.remove('bg-blue-100');
  }

  // Show or hide the delete icon based on checkbox selections
  const selectedRows = document.querySelectorAll('.select-row:checked');
  const deleteIcon = document.getElementById('delete-icon');
  if (selectedRows.length > 0) {
    deleteIcon.classList.add('visible');
  } else {
    deleteIcon.classList.remove('visible');
  }
}

function toggleSelectAll() {
  const selectAllCheckbox = document.getElementById('select-all');
  const checkboxes = document.querySelectorAll('.select-row');
  checkboxes.forEach(checkbox => {
    checkbox.checked = selectAllCheckbox.checked;
    const row = checkbox.closest('tr');
    if (checkbox.checked) {
      row.classList.add('bg-blue-100');
    } else {
      row.classList.remove('bg-blue-100');
    }
  });

  // Show or hide the delete icon based on checkbox selections
  const selectedRows = document.querySelectorAll('.select-row:checked');
  const deleteIcon = document.getElementById('delete-icon');
  if (selectedRows.length > 0) {
    deleteIcon.classList.add('visible');
  } else {
    deleteIcon.classList.remove('visible');
  }
}

function deleteSelectedRows() {
  const selectedRows = document.querySelectorAll('.select-row:checked');
  selectedRows.forEach(row => {
    row.closest('tr').remove(); // Remove the selected row
  });

  // Hide the delete icon if no rows are selected
  const deleteIcon = document.getElementById('delete-icon');
  deleteIcon.classList.remove('visible');
}

function updatePagination(totalRows) {
  totalPages = Math.ceil(totalRows / rowsPerPage);

  const pageButtonsContainer = document.getElementById('page-buttons');
  pageButtonsContainer.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.classList.add('px-4', 'py-2', 'bg-gray-300',  'text-gray-700', 'rounded-md', 'hover:bg-gray-400', 'focus:outline-none');
    if (i === currentPage) {
      button.classList.add('bg-blue-500', 'text-white');
    }
    button.onclick = () => {
      currentPage = i;
      updateTable();
    };
    pageButtonsContainer.appendChild(button);
  }

  updatePaginationControls();
}

function updatePaginationControls() {
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const pageInfo = document.getElementById('page-info');

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  pageInfo.textContent = `showing  ${currentPage} to ${totalPages} entries`;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updateTable();
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updateTable();
  }
}

updateTable(); // Initialize table