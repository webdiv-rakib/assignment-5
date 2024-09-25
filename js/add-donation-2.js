document.getElementById("donation-btn-2").addEventListener('click', function (event) {
    event.preventDefault();
    console.log("2button clicked")

    const addMoney = getInputFieldById("input-amount-1");
    const currentDonation = getInputTextById("donation-2");
    const availableBalance = getInputTextById("account-balance");
    console.log(availableBalance);

    if (addMoney > 0) {
        const updateDonation = currentDonation + addMoney;
        const updateBalance = availableBalance - addMoney;
        console.log(updateDonation);
        document.getElementById("donation-2").innerText = updateDonation;
        document.getElementById("account-balance").innerText = updateBalance;
    }
    else {
        alert("Enter an amount");
    }
})