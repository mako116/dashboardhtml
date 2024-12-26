let currentPage = 1;
        let rowsPerPage = 5;

        // Example data
        const data = Array.from({ length: 30 }, (_, i) => ({
            id: i + 102323,
            ip: `192.168.0.${i + 1}`,
            country: ["USA", "Canada", "UK", "India", "Germany"][i % 5],
            userAgent: `Mozilla/5.0 (Device ${i + 1})`,
            date: new Date().toISOString().split("T")[0],
        }));

        let filteredData = [...data]; // To store filtered data

        function updateTable() {
            rowsPerPage = parseInt(document.getElementById("rows-per-page")?.value) || rowsPerPage;
            const searchQuery = document.getElementById("search-box")?.value.toLowerCase().trim() || '';
            const tableBody = document.getElementById("table-body");

            // Filter data
            filteredData = data.filter(row => 
                row.ip.toLowerCase().includes(searchQuery) ||
                row.country.toLowerCase().includes(searchQuery) ||
                row.userAgent.toLowerCase().includes(searchQuery)
            );

            // Clear and update table
            tableBody.innerHTML = "";
            const start = (currentPage - 1) * rowsPerPage;
            const end = start + rowsPerPage;
            const visibleData = filteredData.slice(start, end);

            if (visibleData.length === 0) {
                tableBody.innerHTML = `
                    <tr>
                        <td colspan="5" class="py-4 text-center text-gray-500 mx-auto">
                            <dotlottie-player src="https://lottie.host/40e9b6ed-5bbd-4ac7-ac3f-eebcaa612b00/zDlNBLuORq.lottie" background="transparent" speed="1" class="flex justify-center mx-auto h-[300px]" loop autoplay></dotlottie-player>
                        </td>
                    </tr>
                `;
            } else {
                visibleData.forEach(row => {
                    const tr = document.createElement("tr");
                    tr.innerHTML = `
                        <td class="py-4 px-6 text-sm">${row.id}</td>
                        <td class="py-4 px-6 text-sm">${row.ip}</td>
                        <td class="py-4 px-6 text-sm">${row.country}</td>
                        <td class="py-4 px-6 text-sm">${row.userAgent}</td>
                        <td class="py-4 px-6 text-sm">${row.date}</td>
                    `;
                    tableBody.appendChild(tr);
                });
            }

            updatePaginationButtons();
        }

        function prevPage() {
            if (currentPage > 1) {
                currentPage--;
                updateTable();
            }
        }

        function nextPage() {
            if (currentPage < Math.ceil(filteredData.length / rowsPerPage)) {
                currentPage++;
                updateTable();
            }
        }

        function updatePaginationButtons() {
            const totalPages = Math.ceil(filteredData.length / rowsPerPage);
            const pageButtonsContainer = document.getElementById("page-buttons");
            const pageInfo = document.getElementById('page-info');

            // Clear previous page buttons
            pageButtonsContainer.innerHTML = '';

            // Generate page buttons dynamically
            for (let i = 1; i <= totalPages; i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i;
                pageButton.classList.add('px-3', 'py-1', 'bg-[#F3F5F6]', 'text-[#2d3748]', 'rounded-lg', 'hover:bg-[#2d3748]', 'hover:text-white');
                if (i === currentPage) {
                    pageButton.classList.add('bg-gray-300', 'text-white');
                }
                pageButton.onclick = () => {
                    currentPage = i;
                    updateTable();
                };
                pageButtonsContainer.appendChild(pageButton);
            }

            // Update the page info text
            pageInfo.textContent = `Showing ${((currentPage - 1) * rowsPerPage) + 1} to ${Math.min(currentPage * rowsPerPage, filteredData.length)} of ${filteredData.length} entries`;

            // Disable prev/next buttons when on first/last page
            document.getElementById("prev-button").disabled = currentPage === 1;
            document.getElementById("next-button").disabled = currentPage === totalPages;
        }

        // Initialize
        document.addEventListener("DOMContentLoaded", () => {
            updateTable();

            document.getElementById("rows-per-page")?.addEventListener("change", () => {
                currentPage = 1;
                updateTable();
            });

            document.getElementById("search-box")?.addEventListener("keyup", () => {
                currentPage = 1;
                updateTable();
            });
        });