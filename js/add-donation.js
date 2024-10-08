document.getElementById("donation-btn-1").addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldById("input-amount");
    const currentDonation = getInputTextById("donation-1");
    const availableBalance = getInputTextById("account-balance");
    console.log(availableBalance);

    if (addMoney > 0) {
        const updateDonation = currentDonation + addMoney;
        const updateBalance = availableBalance - addMoney;
        console.log(updateDonation);
        document.getElementById("donation-1").innerText = updateDonation;
        document.getElementById("account-balance").innerText = updateBalance;

         // open modal 
        const modal = document.getElementById("my_modal_5");
        modal.classList.remove('hidden');
        my_modal_5.showModal();
    }
    else {
        alert("Enter an amount");
    }
})