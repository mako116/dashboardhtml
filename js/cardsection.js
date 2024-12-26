// document.addEventListener('DOMContentLoaded', () => {
//     const cardsData = [
//         {
//             title: 'Total Visits',
//             value: '1',
//             image: 'assets/people.png',
//             bgClass: 'bg_card'
//         },
//         {
//             title: 'Valid',
//             value: '1',
//             image: 'assets/protection.png',
//             bgClass: 'bg_card'
//         },
//         {
//             title: 'Invalid',
//             value: '1',
//             image: 'assets/shield.png',
//             bgClass: 'bg_card'
//         },
//         {
//             title: 'SSO',
//             value: '1',
//             image: 'assets/leaf.png',
//             bgClass: 'bg_card'
//         }
//     ];

//     const container = document.getElementById('card-container');

//     cardsData.forEach(card => {
//         const cardElement = document.createElement('div');
//         cardElement.className = `${card.bgClass} font-nunito flex justify-between pr-4 rounded shadow-md sm:w-1/2 md:w-[250px] w-full`;

//         cardElement.innerHTML = `
//             <div class="gap-[20px] p-[20px]">
//                 <h3 class="md:text-[20px] font-[600] leading-[21.82px] text-center pb-[10px]">${card.title}</h3>
//                 <p class="my-[10px] md:text-[20px] leading-[38.19px] font-semibold">${card.value}</p>
//             </div>
//             <div class="mt-[20px] mr-[10px]">
//                 <img src="${card.image}" alt="${card.title}">
//             </div>
//         `;

//         container.appendChild(cardElement);
//     });
// });
