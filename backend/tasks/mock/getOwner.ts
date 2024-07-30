import "dotenv/config";
import { task } from "hardhat/config";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { loadDeployedContractAddresses, } from "../../helper/contractsJsonHelper";

task("getOwner", "get owner address").setAction(
  async (taskArgs: any, hre: HardhatRuntimeEnvironment) => {
    console.log("========================================== [START] ==========================================")
    // get Contract Address
    const {
      contracts: {Lock},
    } = loadDeployedContractAddresses(hre.network.name);
    // create Lock contract
    const lock = await hre.ethers.getContractAt(
      "Lock",
      Lock
    );
    // get owner address
    const owner = await lock.owner();
    console.log("owner address:", owner);
    console.log("========================================== [END] ==========================================")
  }
);