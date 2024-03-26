const requestOptions = {
    method: "GET",
    redirect: "follow"
};

    fetch("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=1JXW7D1CUKX4HM1E9IX4U62Z4Z36NX35DT", requestOptions)
    .then(response => response.json())
    .then(data => {
        const safeGasPrice = data.result.SafeGasPrice;
        const proposeGasPrice = data.result.ProposeGasPrice;
        const fastGasPrice = data.result.FastGasPrice;

        document.getElementById('safeGasPrice').innerText = `Gwai : ${safeGasPrice}`;
        document.getElementById('proposeGasPrice').innerText = `Gwai : ${proposeGasPrice}`;
        document.getElementById('fastGasPrice').innerText = `Gwai : ${fastGasPrice}`;
    })
    .catch(error => console.error('Error fetching gas data:', error));

fetchDataAndUpdateUI();

setInterval(fetchDataAndUpdateUI, 60000);