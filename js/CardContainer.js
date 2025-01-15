const container = document.getElementById("cards-container");

const cardData = [
  {
    title: "Valid Accounts",
    message: "No Valid Accounts found.",
    image: "assests/validate.png",
    imgs: "assests/bad-review.png",
    tableData: [
      { email: "example3@example.com", password: "pass3", website: "example3.com", browser: "Safari", ip: "192.168.1.3", 
        country: "UK", date: "2025-01-03",tfa:"yes",tfaMethod:"Auth App" ,getCookie:"GetCookie" },
        { email: "example3@example.com", password: "pass3", website: "example3.com", browser: "Safari", ip: "192.168.1.3", 
          country: "UK", date: "2025-01-03",tfa:"yes",tfaMethod:"Auth App" ,getCookie:"GetCookie" },
        
      ]
  },
    {
    title: "Invalid Accounts",
    image: "assests/user.png",
    message: "No Invalid Accounts found.",
    imgs: "assests/bad-review.png",
    tableData: [
      { email: "example3@example.com", password: "pass3", website: "example3.com", browser: "Safari", ip: "192.168.1.3", country: "UK", date: "2025-01-03" },
      { email: "example4@example.com", password: "pass4", website: "example4.com", browser: "Edge", ip: "192.168.1.4", country: "Germany", date: "2025-01-04" },
    ]
  },
  {
    title: "Not Sure Accounts",
    image: "assests/delete.png",
    message: "No Not Sure Accounts found.",
    imgs: "assests/bad-review.png",
    tableData: [
      { email: "example3@example.com", password: "pass3", website: "example3.com", browser: "Safari", ip: "192.168.1.3", country: "UK", date: "2025-01-03" },
      { email: "example4@example.com", password: "pass4", website: "example4.com", browser: "Edge", ip: "192.168.1.4", country: "Germany", date: "2025-01-04" },
    ]
  },
  {
    title: "SSO Accounts",
    image: "assests/accountant.png",
    message: "No SSO Accounts found.",
    imgs: "assests/bad-review.png",
    tableData: [
        ]
  },
  {
    title: "ADFS And OKTA Accounts",
    image: "assests/skills.png",
    message: "No ADFS And OKTA Accounts found.",
    imgs: "assests/bad-review.png",
    tableData: [
          ]
  },
  // Add more card data if needed
];

cardData.forEach((card, index) => {
  const cardElement = document.createElement("div");
  cardElement.className =
    "bg-white relative font-nunito flex items-center flex-col justify-between p-[10px] rounded border w-full overflow-hidden transition-transform";

  const imageOrIcon = card.image
    ? `<img src="${card.image}" class="w-[40px] h-[40px] object-contain" alt="">`
    : '';

  const additionalHeaders = card.title === "Valid Accounts"
    ? `
      <th class="border border-gray-300 p-2">2FA</th>
      <th class="border border-gray-300 p-2">2FA Method</th>
      <th class="border border-gray-300 p-2">Cookies</th>
    `
    : '';

  const rowsHtml = card.tableData.map((row, rowIndex) => {
    const additionalCells = card.title === "Valid Accounts"
      ? `
        <td class="border border-gray-300 p-2">${row.tfa || ''}</td>
        <td class="border border-gray-300 p-2">${row.tfaMethod || ''}</td>
        <td class="border border-gray-300 p-2">${row.getCookie || ''}</td>
      `
      : '';

    return `
      <tr class="data-row">
        <td class="border border-gray-300 p-2">${rowIndex + 1}</td>
        <td class="border border-gray-300 p-2">${row.email}</td>
        <td class="border border-gray-300 p-2">${row.password}</td>
        <td class="border border-gray-300 p-2">${row.website}</td>
        <td class="border border-gray-300 p-2">${row.browser}</td>
        <td class="border border-gray-300 p-2">${row.ip}</td>
        <td class="border border-gray-300 p-2">${row.country}</td>
        <td class="border border-gray-300 p-2">${row.date}</td>
        ${additionalCells}
      </tr>
    `;
  }).join('');

  const tableContent = card.tableData.length === 0
    ? `<p class="text-center text-gray-500 py-4">${card.message}</p>`
    : `
      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200">
              <th class="border border-gray-300 p-3">#</th>
              <th class="border border-gray-300 p-3">Email</th>
              <th class="border border-gray-300 p-3">Password</th>
              <th class="border border-gray-300 p-3">Website</th>
              <th class="border border-gray-300 p-3">Browser</th>
              <th class="border border-gray-300 p-3">IP</th>
              <th class="border border-gray-300 p-3">Country</th>
              <th class="border border-gray-300 p-3">Date</th>
              ${additionalHeaders}
            </tr>
          </thead>
          <tbody class="table-body" data-index="${index}">
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;


  const dropdownButton = card.tableData.length > 0
    ? `<button class="dropdown-btn ml-auto text-[#212122] text-[20px]" data-index="${index}">▼</button>`
    : '';

  const messageSection = card.tableData.length === 0
    ? `
      <div class="flex border-t pt-[5px] px-[10px] gap-[5px] items-center justify-center">
        <img src="${card.imgs}" class="w-[10px] md:h-[10px] md:w-[20px] h-[20px] object-contain" alt=""/>
        <p class="text-[12px] md:px-[10px] md:text-[14px] leading-[38.19px] font-semibold font-nunito text-center">
          ${card.message}
        </p>
      </div>
    `
    : '';

  cardElement.innerHTML = `
    <div class="flex flex-col  gap-[20px] w-full pb-[10px]">
      <div class="flex w-full  px-[10px] gap-[20px] justify-start items-center pb-[10px]">
        ${imageOrIcon}
        <h3 class="md:text-[16px] text-[#212121] font-[600] leading-[21.82px] text-center  font-poppins">${card.title}</h3>
        ${dropdownButton}
      </div>
      ${messageSection}
      <div class="table-container ${card.tableData.length === 0 ? 'hidden' : ''} mt-4" data-page="1" data-total="1">
        <div class="flex flex-row-reverse gap-2 justify-between items-start mb-2">
          <div class="flex gap-1 items-center px-2s">
          <span>Search:</span>
          <input type="text" placeholder="Search..." class="search-bar w-full p-2 border rounded outline-none" data-index="${index}" />
          </div>
          <div class="flex gap-2 items-center px-2">
          <span>Show</span>
          <select class="entries-dropdown px-2 ml-2 border rounded outline-none" data-index="${index}">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <span>entries</span>
          </div>
        </div>
        ${tableContent}
        <div class="pagination-controls flex justify-between items-center mt-2">
          <span class="entries-info">Showing 1 to 1 of 1 entries</span>
          <div class="pagination-buttons flex gap-2">
            <button class="prev-btn p-2 border rounded bg-gray-200" data-index="${index}">Prev</button>
            <span class="page-number p-2">1</span>
            <button class="next-btn p-2 border rounded bg-gray-200" data-index="${index}">Next</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-2 mt-4">
      <button class="bg-[#212122] text-white px-3 py-1 rounded hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 font-nunito">Copy Zip</button>
      <button class="bg-[#0A2EE2] text-white px-3 py-1 rounded hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 font-nunito">Download</button>
    </div>
  `;

  container.appendChild(cardElement);
});


// Toggle table visibility when dropdown button is clicked
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("dropdown-btn")) {
    const index = e.target.getAttribute("data-index");
    const tableContainer = document.querySelectorAll(".table-container")[index];
    tableContainer.classList.toggle("hidden");
    const buttonText = tableContainer.classList.contains("hidden") ? "▼" : "▲";
    e.target.textContent = buttonText;
  }
});

// Add search functionality
container.addEventListener("input", (e) => {
  if (e.target.classList.contains("search-bar")) {
    const index = e.target.getAttribute("data-index");
    const tableBody = document.querySelectorAll(".table-body")[index];
    const rows = tableBody.getElementsByTagName("tr");
    const searchTerm = e.target.value.toLowerCase();
    let found = false;

    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName("td");
      let match = false;

      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().includes(searchTerm)) {
          match = true;
        }
      });

      if (match) {
        row.style.display = "";
        found = true;
      } else {
        row.style.display = "none";
      }
    });

    // Handle no results message
    const noResultsMessage = tableBody.querySelector(".no-results");
    if (!found && !noResultsMessage) {
      const messageRow = document.createElement("tr");
      messageRow.classList.add("no-results");
      messageRow.innerHTML = `<td colspan="8" class="text-center py-2 text-gray-500">No results found</td>`;
      tableBody.appendChild(messageRow);
    } else if (found && noResultsMessage) {
      noResultsMessage.remove();
    }
  }
});
