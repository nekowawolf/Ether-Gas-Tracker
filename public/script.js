const gasPriceUrl = 'https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=1JXW7D1CUKX4HM1E9IX4U62Z4Z36NX35DT';

fetch(gasPriceUrl)
  .then(response => response.json())
  .then(data => {
    // Tangani data respons di sini
    console.log(data);
    const safeGasPrice = data.result.SafeGasPrice;
    const proposeGasPrice = data.result.ProposeGasPrice;
    const fastGasPrice = data.result.FastGasPrice;
    
    console.log('Safe Gas Price:', safeGasPrice);
    console.log('Propose Gas Price:', proposeGasPrice);
    console.log('Fast Gas Price:', fastGasPrice);
    
    // Lakukan sesuatu dengan data gas price yang Anda dapatkan
  })
  .catch(error => {
    // Tangani kesalahan jika terjadi
    console.error('Error fetching gas prices:', error);
  });
