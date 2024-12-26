const cardData = [
  {
    title: "Valid Accounts",
    message: "No Valid Accounts found.",
    image: "assests/validate.png",
     imgs:"assests/bad-review.png"
  },
  {
    title: "Not Sure Accounts",
    image: "assests/delete.png",
    message: "No Not Sure Accounts found.",
     imgs:"assests/bad-review.png"
  },
  {
    title: "Invalid Accounts",
     image: "assests/user.png",
    message: "No Invalid Accounts found.",
     imgs:"assests/bad-review.png"
  },
  {
    title: "SSO Accounts",
     image: "assests/accountant.png",
    message: "No SSO Accounts found.",
     imgs:"assests/bad-review.png"
  },
  {
    title: "ADFS And OKTA Accounts",
     image: "assests/skills.png",
    message: "No ADFS And OKTA Accounts found.",
     imgs:"assests/bad-review.png"
  },
];

const container = document.getElementById("cards-container");

// Generate cards dynamically
cardData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.className =
    "group bg-white relative font-nunito flex justify-between pr-[10px] py-[15px] rounded border w-full overflow-hidden transition-transform transform hover:scale-105";

  // Check if an image or icon exists
  const imageOrIcon = card.image
    ? `<img src=${card.image} class="w-[40px] h-[40px] object-contain" alt="">`
    : card.icon
    ? `<i class="fa ${card.icon} text-[24px] text-center"></i>`
    : '';

  cardElement.innerHTML = `
    <div class="gap-[20px] w-full pb-[10px]">
      <div class="flex w-full px-[10px] gap-[20px] items-center pb-[10px]">
        ${imageOrIcon}
        <h3 class="md:text-[16px] text-[#212121] font-[600] leading-[21.82px] text-center m-auto font-poppins">${card.title}</h3>
      </div>
<div class="flex border-t pt-[5px] px-[10px] gap-[5px] items-center justify-center">
      <img src= ${card.imgs} class="w-[10px] md:h-[10px] md:w-[20px] h-[20px] object-contain" alt="">
      <p class=" text-[12px] md:px-[10px] md:text-[14px] leading-[38.19px] font-semibold font-nunito text-center">
      ${card.message}</p>
      </div>   
     </div>
    <!-- Overlay -->
    <div class="absolute inset-0 bg-[#000] bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
    <!-- Hover Buttons -->
    <div class="absolute inset-0 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <button class="bg-[#212122] text-white px-3 py-1 rounded hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 font-nunito">Copy Zip</button>
      <button class="bg-[#0A2EE2] text-white px-3 py-1 rounded hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 font-nunito">Download</button>
    </div>
  `;

  container.appendChild(cardElement);
});
