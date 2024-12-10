const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function() {
    let Greeter;
    let greeter;

    beforeEach(async function() {
        Greeter = await ethers.getContractFactory("Greeter");
        greeter = await Greeter.deploy("Hello World");
    });

  it("debería inicializarse con 'Hello World'", async () => {
    const greeting = await greeter.greet();
    expect(greeting).to.equal("Hello World");
  });

  it("debería cambiar el saludo y leerlo correctamente", async () => {
    await greeter.setGreeting("Adios mundo cruel");
    const newGreeting = await greeter.greet();
    expect(newGreeting).to.equal("Adios mundo cruel");
  });
});