const { ethers } = require("ethers");
const utils = require("ethers").utils;


async function executeTransaction(amount)
{   
  // contract address
    const address = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";
    
    // secret key of the first address on hardhat network
    const SECRET_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

    let provider = new ethers.providers.JsonRpcProvider()
    //connects to the choosen framework in command line
    //console.log(provider);

    tx = {
      to: address,
      value: utils.parseEther(`${amount}.0`)
    }

    const signer = new ethers.Wallet(SECRET_KEY, provider);
    await signer.signTransaction(tx);

    const Signer = signer.connect(provider);

    const confirmation = await Signer.sendTransaction(tx);

    let balance1 = await provider.getBalance(address);
    let balance2 = await signer.getBalance();

    let weiValue = 10 ** 18;

    let array1 = [true, balance1.toString()/weiValue, balance2.toString()/weiValue]

    if(confirmation)
    {
      return array1
    } 
}


module.exports = executeTransaction;
