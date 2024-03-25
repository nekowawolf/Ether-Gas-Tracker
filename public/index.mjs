import axios from 'axios';
import { ethers } from 'ethers';

const node = 'https://wandering-muddy-card.quiknode.pro/c57812375bdf69e93a0b590ef9fa8ab5bba10233/';
const provider = new ethers.providers.JsonRpcProvider(node);

const url = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=1JXW7D1CUKX4HM1E9IX4U62Z4Z36NX35DT';

async function main() {
    // EthersJS
    const gasPrice = await provider.getGasPrice();
    console.log(ethers.utils.formatEther(gasPrice));
    console.log(ethers.utils.formatUnits(gasPrice, 'gwei'));

    const gas = await provider.getFeeData();
    console.log(ethers.utils.formatUnits(gas.maxFeePerGas, 'gwei'));
    console.log(ethers.utils.formatUnits(gas.maxPriorityFeePerGas, 'gwei'));

    // Etherscan
    try {
        const response = await axios.get(url);
        const gasData = response.data.result;
        console.log(gasData.SafeGasPrice);
        console.log(gasData.ProposeGasPrice);
        console.log(gasData.FastGasPrice);
    } catch (error) {
        console.error('Error fetching gas data from Etherscan:', error);
    }
}

main();
