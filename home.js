document.getElementById("add-money-btn").addEventListener("click", function(e) {
    e.preventDefault();

    const addAmount = parseInt(document.getElementById("add-amount").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    const total = availableBalance + addAmount;
    document.getElementById("available-balance").innerText = total;
});
