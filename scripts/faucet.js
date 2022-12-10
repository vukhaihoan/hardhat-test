const { ethers } = require("hardhat");
const {
  abi: abi20,
} = require("../artifacts/contracts/GoofyGoober.sol/GoofyGoober.json");

const {
  abi: abiFaucet,
} = require("../artifacts/contracts/Faucet.sol/Faucet.json");

const DAI_ADDRESS = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
const faucetAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
var minGasPrice = 0;
async function main() {
  const signer = new ethers.Wallet(
    "0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356",
    ethers.provider
  );
  const contract20 = new ethers.Contract(DAI_ADDRESS, abi20, signer);
  const balance = await contract20.balanceOf(signer.address);
  console.log("Balance:", balance.toString());

  const contractFaucet = new ethers.Contract(faucetAddress, abiFaucet, signer);
  const tx = await contractFaucet.requestTokens({
    value: 0,
    gas: 200000,
    gasPrice: minGasPrice,
    from: signer.address,
    // nonce: nonce,
  });
  console.log("tx:", tx);

  const balance2 = await contract20.balanceOf(signer.address);
  console.log("Balance2:", balance2.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
