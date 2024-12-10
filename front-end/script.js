const greeterAddress = "0x15E582066C64BCc53A9d0c857a8D3B969A867b88"; 
const greeterAbi = [{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"setGreeting","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let signer;
let greeterContract;

async function connect() {
    alert("Connecting...");
    if (typeof window.ethereum !== 'undefined') {
        // Solicitar conexión a MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        const address = await signer.getAddress();
        greeterContract = new ethers.Contract(greeterAddress, greeterAbi, signer);
        document.getElementById("accountAddress").innerText = `Connected: ${address}`;
    } else {
        alert('MetaMask not installed');
    }
}

//Lectura ultimo saludo cargado
async function read() {
    alert("Reading function running...")
    
    const greeting = await greeterContract.greet();
    document.getElementById("greeting").innerText = greeting;
}

//Cargar nuevo saludo
async function Write() {
    let value2Change = document.getElementById("value2change").value;
    alert("Writing new greeting: "+ value2Change);
    document.getElementById('value2change').value = '';
    const tx = await greeterContract.setGreeting(value2Change);
    await tx.wait();
    //borrar contenido ya cambiado
    
}