const DAI_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const transferAddress = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
const {
  abi,
} = require("../artifacts/contracts/GoofyGoober.sol/GoofyGoober.json");
const { ethers } = require("hardhat");
async function main() {
  const [deployer] = await ethers.getSigners();
  const contract = new ethers.Contract(DAI_ADDRESS, abi, deployer);
  const balance = await contract.balanceOf(transferAddress);
  console.log("Balance:", balance.toString());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
