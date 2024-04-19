import type { HardhatRuntimeEnvironment } from "hardhat/types";
import type { DeployFunction } from "hardhat-deploy/types";
import { Deployments } from "../utils/deploymentUtils";
import type { ChainId } from "@pancakeswap/sdk";
import { shouldVerifyContract } from "../utils/deploy";
import { verify } from "../scripts/verifyContract";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deploy } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();
  const chainId = await hre.getChainId();

  console.log("Deployer Address", deployer);

  const WETH9 = Deployments[Number(chainId) as ChainId].WETH9;
  const pancakeSwapV2Facotry =
    Deployments[Number(chainId) as ChainId].PancakeSwapV2Facotry;
  const pancakeSwapV3Facotry =
    Deployments[Number(chainId) as ChainId].PancakeSwapV3Facotry;
  const feeAssets = [
    Deployments[Number(chainId) as ChainId].Cake,
    Deployments[Number(chainId) as ChainId].Busd,
    Deployments[Number(chainId) as ChainId].WETH9,
  ];

  const res = await deploy("SmartWalletFactory", {
    from: deployer,
    args: [pancakeSwapV2Facotry, pancakeSwapV3Facotry, WETH9, feeAssets],
    log: true,
    skipIfAlreadyDeployed: true,
    deterministicDeployment: "0x000022",
  });

  console.log("SmartWalletFactory Address", res.address);
  console.log("checking if contracct should be verified");

  //      const shouldVerify = await shouldVerifyContract(res);
  //      if (shouldVerify) {
  //           console.log("verifyng contract...");

  //           await verify({
  //                name: "SmartWalletFactory",
  //                path: "contracts/SmartWalletFactory.sol:SmartWalletFactory",
  //           });
  //           console.log("sucessuflly verified SmartWalletFactory");
  //      }
  //      console.log("contract does not need t be verified");
};
export default func;

func.tags = ["SmartWalletFactory"];
