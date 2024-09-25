const donateButton = document.getElementById("donate-tab-button");
const historyButton = document.getElementById("history-tab-button");
const donationTab = document.getElementById("donation-cards");
const historyTab = document.getElementById("donate-history");








function getInputFieldById(id) {
    const inputField = document.getElementById(id).value;
    const inputFieldNumber = parseFloat(inputField);
    return inputFieldNumber;
}

function getInputTextById(id) {
    const inputText = document.getElementById(id).innerText;
    const inputTextNumber = parseFloat(inputText);
    return inputTextNumber;

}
donateButton.onclick = function () {
    donateButton.style.backgroundColor = '#B4F461';
    historyButton.style.backgroundColor = '#fff';
    donationTab.classList.add('block');
    donationTab.classList.remove('hidden');
    historyTab.classList.add('hidden');
    historyTab.classList.remove('block');
}
historyButton.onclick = function () {
    historyButton.style.backgroundColor = '#B4F461';
    donateButton.style.backgroundColor = '#fff';
    historyTab.classList.add('block');
    historyTab.classList.remove('hidden');
    donationTab.classList.add('hidden');
    donateButton.classList.remove('block');
}

