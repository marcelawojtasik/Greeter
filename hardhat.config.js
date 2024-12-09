require("@nomicfoundation/hardhat-toolbox"); 
require("dotenv").config();

const alchemyUrl = process.env.ALCHEMY_URL;
const prKey = process.env.PRIVATE_KEY ;
const ethScanAPI = process.env.ETHERSCAN_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks:{
    sepolia:{ 
      url: alchemyUrl,
      accounts:[prKey]
    },
    hardhat:{
      chainId: 1337,
    },
  },
  etherscan:{
    apiKey:{
      sepolia: ethScanAPI,
    },
  },
  sourcify: {
    enabled: true
  }
};
