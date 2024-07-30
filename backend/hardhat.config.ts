import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import 'dotenv/config';
import fs from "fs";
import { HardhatUserConfig } from "hardhat/config";
import path from "path";

const SKIP_LOAD = process.env.SKIP_LOAD === "true";
if (!SKIP_LOAD) {
  const taskPaths = ["utils", "mock"];
  taskPaths.forEach((folder) => {
    const tasksPath = path.join(__dirname, "tasks", folder);
    fs.readdirSync(tasksPath)
      .filter((_path) => _path.includes(".ts"))
      .forEach((task) => {
        require(`${tasksPath}/${task}`);
      });
  });
}

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    bitLayerTestnet: {
      url: 'https://testnet-rpc.bitlayer.org',
      accounts: [process.env.PRIVATE_KEY!]
    },
  },
  sourcify: {
    enabled: true
  }
};

export default config;
