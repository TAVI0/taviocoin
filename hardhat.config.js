require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, POLYGON_RPC_URL, AMOY_RPC_URL } = process.env;

module.exports = {
	solidity: "0.8.20",
	networks: {
		polygonAmoy: {
			url: AMOY_RPC_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
		polygon: {
			url: POLYGON_RPC_URL,
			accounts: [`0x${PRIVATE_KEY}`],
		},
	},
	etherscan: {
		apiKey: "TU_API_KEY_DE_POLYGONSCAN",
	},
};
