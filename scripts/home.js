document.addEventListener("DOMContentLoaded", () => {
    const coinData = [
        ["../assets/bitcoin.png", "Bitcoin", "12,005,201 IDR", "+14.04%"],
        ["../assets/ethereum.png", "Ethereum", "11,214,009 IDR", "+12.45%"],
        ["../assets/tether.png", "Tether", "15,000 IDR", "+0.01%"],
        ["../assets/xrp.png", "XRP", "7,890 IDR", "+8.67%"]
    ];

    const container = document.getElementById("coinCardsContainer");

    coinData.forEach(([icon, name, price, change]) => {
        const card = document.createElement("div");
        card.className = "coin-card card";
        card.innerHTML = `
            <div class="coin-card-header">
                <img src="${icon}" alt="${name.toLowerCase()}">
                <h4>${name}</h4>
            </div>
            <div class="coin-card-text">
                <h5>${price}</h5>
                <h6 class="increase">${change}</h6>
            </div>
        `;
        container.appendChild(card);
    });
});