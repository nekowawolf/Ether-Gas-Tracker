const button = document.getElementById("fetch-fee");
const feeContainer = document.getElementById("fee-container");

button.addEventListener("click", async () => {
  const tatum = await TatumSDK.init({ network: Network.ETHEREUM, version: ApiVersion.V3 });

  const fee = await tatum.fee.getCurrentFee();

  feeContainer.textContent = `Current Fee: ${fee.data.gasPrice.fast}`;
});