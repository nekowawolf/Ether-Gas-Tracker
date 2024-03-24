const { default: axios } = require('axios')
const {ethers} = require('ethers')
const node = 'https://wandering-muddy-card.quiknode.pro/c57812375bdf69e93a0b590ef9fa8ab5bba10233/'
const provider = new ethers.providers.JsonRpcProvider(node);

url = 'https://api.etherscan.io/api?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=1JXW7D1CUKX4HM1E9IX4U62Z4Z36NX35DT'

async function main(){
    //EthersJS
    const gasPrice = await provider.getGasPrice()
    console.log(ethers.utils.formatEther(gasPrice))
    console.log(ethers.utils.formatUnits(gasPrice, 'gwei'))

    const gas = await provider.getFeeData()
    console.log(ethers.utils.formatUnits(gas.maxFeePerGas, 'gwei'))
    console.log(ethers.utils.formatUnits(gas.maxPriorityFeePerGas, 'gwei'))
    

    //Etherscan
    const gasTracker = await axios.get(url)
    console.log(gas.data.result.SafeGasPrice)
    console.log(gas.data.result.ProposeGasPrice)
    console.log(gas.data.result.FastGasPrice)
    

}
main()