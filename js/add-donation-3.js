document.getElementById("donation-btn-3").addEventListener('click', function (event) {
    event.preventDefault();


    const addMoney = getInputFieldById("input-amount-2");
    const currentDonation = getInputTextById("donation-3");
    const availableBalance = getInputTextById("account-balance");
    console.log(availableBalance);

    if (addMoney > 0) {
        const updateDonation = currentDonation + addMoney;
        const updateBalance = availableBalance - addMoney;
        console.log(updateDonation);
        document.getElementById("donation-3").innerText = updateDonation;
        document.getElementById("account-balance").innerText = updateBalance;
    }
    else {
        alert("Enter an amount");
    }
})