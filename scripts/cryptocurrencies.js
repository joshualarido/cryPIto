// Loads All Coins containers
document.addEventListener("DOMContentLoaded", () => {
    const allCoinData = [
        ["../assets/bitcoin.png", "Bitcoin", "1,062,304,000 IDR", "+2.35%"],
        ["../assets/ethereum.png", "Ethereum", "81,250,000 IDR", "+1.78%"],
        ["../assets/tether.png", "Tether", "16,250 IDR", "+0.02%"],
        ["../assets/xrp.png", "XRP", "9,800 IDR", "-1.15%"],
        ["../assets/bnb.png", "BNB", "6,950,000 IDR", "+1.10%"],
        ["../assets/solana.png", "Solana", "2,150,000 IDR", "+3.80%"],
        ["../assets/cardano.png", "Cardano", "7,250 IDR", "+2.45%"],
        ["../assets/doge.png", "Dogecoin", "1,875 IDR", "-0.62%"]
    ];

    const allContainer = document.getElementById("allCoinsContainer");

    allCoinData.forEach(([icon, name, price, change]) => {
        const changeClass = change.trim().startsWith("-") ? "decrease" : "increase";

        const card = document.createElement("div");
        card.className = "coin-card card";
        card.innerHTML = `
            <div class="coin-card-header">
                <img src="${icon}" alt="${name.toLowerCase()}">
                <h4>${name}</h4>
            </div>
            <div class="coin-card-text">
                <h5>${price}</h5>
                <h6 class="${changeClass}">${change}</h6>
            </div>
        `;
        allContainer.appendChild(card);
    });
});

// Loads leaderboard Rankings
document.addEventListener("DOMContentLoaded", () => {
    const topRankingData = [
        ["../assets/bitcoin.png", "Bitcoin", "1,062,304,000 IDR", "+2.35%"],
        ["../assets/ethereum.png", "Ethereum", "81,250,000 IDR", "+1.78%"],
        ["../assets/tether.png", "Tether", "16,250 IDR", "+0.02%"],
        ["../assets/xrp.png", "XRP", "9,800 IDR", "-1.15%"]
    ];

    const leaderboardContainer = document.getElementById("leaderboardContainer");

    topRankingData.forEach(([icon, name, price, change], index) => {
        const changeClass = change.trim().startsWith("-") ? "decrease" : "increase";

        const ranking = document.createElement("div");
        ranking.className = "ranking";
        ranking.innerHTML = `
            <div class="ranking-header">
                <img src="${icon}" alt="${name.toLowerCase()}">
                <div class="ranking-header-text">
                    <h4>${name}</h4>
                    <h5>IDR</h5>
                </div>
            </div>
            <div class="ranking-change ranking-detail">
                <h5>Change</h5>
                <h6 class="${changeClass}">${change}</h6>
            </div>
            <div class="ranking-price ranking-detail">
                <h5>Price</h5>
                <h6>${price}</h6>
            </div>
            <a class="button-hollow">View -></a>
        `;

        leaderboardContainer.appendChild(ranking);

        // Add a divider except after the last item
        if (index !== topRankingData.length - 1) {
            leaderboardContainer.appendChild(document.createElement("hr"));
        }
    });
});