const {buildModule} = require("@nomicfoundation/hardhat-ignition/modules");

const GreeterModule = buildModule("GreeterModule", (deployer)=>{
    const greet = deployer.contract("Greeter", ["Hello world"]); //params del constructor
    return {greet};
});

module.exports = GreeterModule;

//Deployed Addresses
//GreeterModule#Greeter - 0x15E582066C64BCc53A9d0c857a8D3B969A867b88
//https://sepolia.etherscan.io/address/0x15E582066C64BCc53A9d0c857a8D3B969A867b88