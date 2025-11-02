const hre = require("hardhat");

async function main() {
	const [deployer] = await hre.ethers.getSigners();
	console.log("Deploying with account:", deployer.address);

	const initialSupply = hre.ethers.parseUnits("1000000", 18); // 1 millón de tokens

	const TavioCoin = await hre.ethers.getContractFactory("TavioCoin");
	const tavioCoin = await TavioCoin.deploy(initialSupply);

	await tavioCoin.waitForDeployment();
	console.log("TavioCoin deployed to:", await tavioCoin.getAddress());
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
