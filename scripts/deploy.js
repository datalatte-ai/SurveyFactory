// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const HDWalletProvider = require("@truffle/hdwallet-provider");

async function main() {
  const SurveyFactory = await hre.ethers.getContractFactory("SurveyFactory");

  const OceanProtocolERC721FactoryAddress = "0x7d46d74023507d30ccc2d3868129fbe4e400e40b";

  const surveyFactory = await SurveyFactory.deploy(OceanProtocolERC721FactoryAddress);

  await surveyFactory.deployed();

  console.log(`SurveyFactory deployed to ${surveyFactory.address}`);

  process.exit(0);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
