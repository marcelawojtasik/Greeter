async function main() {
    const greeterAddress = "0x15E582066C64BCc53A9d0c857a8D3B969A867b88";
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = Greeter.attach(greeterAddress);
    const greeting = await greeter.greet();
    console.log(greeting);
}

main();