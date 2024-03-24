const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=1JXW7D1CUKX4HM1E9IX4U62Z4Z36NX35DT", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));