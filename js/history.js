const donationAmountOneElement = document.getElementById("input-amount");
const donationAmountTwoElement = document.getElementById("input-amount-1");
const donationAmountThreeElement = document.getElementById("input-amount-2");

const donationButtonOne = document.getElementById("donation-btn-1")
const donationButtonTwo = document.getElementById("donation-btn-2")
const donationButtonThree = document.getElementById("donation-btn-3")


const locationOne = document.getElementById("noakhali").innerText;
const locationTwo = document.getElementById("feni").innerText;
const locationThree = document.getElementById("sadhin").innerText;

const dateTime = new Date();

const historySection = document.getElementById("donate-history");

donationButtonOne.onclick = function () {
    const donationAmountOne = donationAmountOneElement.value;
    console.log(donationAmountOne);
    const div = document.createElement('div');
    div.classList = 'border-2 p-8 rounded-lg border-grey-400'
    div.innerHTML = `
        <h3 class = "font-bold text-lg">${donationAmountOne} Taka is Donated for ${locationOne}</h3>
        <p>${dateTime}</p>
    `
    historySection.appendChild(div);
}
donationButtonTwo.onclick = function () {
    const donationAmountTwo = donationAmountOneElement.value;
    console.log(donationAmountTwo);
    const div = document.createElement('div');
    div.classList = 'border-2 p-8 rounded-lg border-grey-400'
    div.innerHTML = `
        <h3 class = "font-bold text-lg">${donationAmountTwo} Taka is Donated for ${locationTwo}</h3>
        <p>${dateTime}</p>
    `
    historySection.appendChild(div);
}
donationButtonThree.onclick = function () {
    const donationAmountThree = donationAmountOneElement.value;
    console.log(donationAmountThree);
    const div = document.createElement('div');
    div.classList = 'border-2 p-8 rounded-lg border-grey-400'
    div.innerHTML = `
        <h3 class = "font-bold text-lg">${donationAmountThree} Taka is Donated for ${locationThree}</h3>
        <p>${dateTime}</p>
    `
    historySection.appendChild(div);
}