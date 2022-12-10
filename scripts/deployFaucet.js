const { ethers } = require("hardhat");

async function main() {
  const Faucet = await ethers.getContractFactory("Faucet");
  const faucet = await Faucet.deploy(
    "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512"
  );

  await faucet.deployed();

  console.log(`deployed to ${faucet.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
