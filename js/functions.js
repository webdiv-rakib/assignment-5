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

const btn = document.getElementById("makeGreen");
btn.onclick = function () {
    btn.style.backgroundColor = '#B4F461';
}
const btn2 = document.getElementById("h-btn");
btn2.onclick = function () {
    btn2.style.backgroundColor = '#B4F461';
}