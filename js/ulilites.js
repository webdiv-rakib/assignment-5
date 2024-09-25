const now = new Date();

// add to transaction history
const div = document.createElement('div');
div.innerHTML = `
    <div class="border p-8 m-6 rounded-xl">
      <h2 class="text-xl font-bold primary-color mb-2">${inputValue} Taka is Donated for ${donateName}</h2>
      <p class="secondary-color text-sm">Date : ${now}</p></div>
  `
document.getElementById('individual-donate-history').appendChild(div);