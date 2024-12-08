const {buildModule} = require("@nomicfoundation/hardhat-ignition/modules");

const GreeterModule = buildModule("GreeterModule", (deployer)=>{
    const greet = deployer.contract("Greeter", ["Hello world"]); //params del constructor
    return {greet};
});

module.exports = GreeterModule;