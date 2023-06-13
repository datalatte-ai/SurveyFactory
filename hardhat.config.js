require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const { NETWORK_URL, PRIVATE_KEY_PUBLISHER, POLYGONSCAN_KEY } = process.env;

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: NETWORK_URL,
      accounts: [`0x${PRIVATE_KEY_PUBLISHER}`],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_KEY,
  },
};
