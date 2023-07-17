import { HardhatUserConfig } from "hardhat/config";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-network-helpers";
import "solidity-coverage";
import "hardhat-gas-reporter";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

export default config;
