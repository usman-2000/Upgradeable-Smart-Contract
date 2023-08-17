const { ethers, upgrades } = require("hardhat");

async function main() {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box version 1");
  const box = await upgrades.deployProxy(Box, [33], {
    initializer: "initializer",
  });
  await box.deployed();
  console.log("Deployed Box Version 1 contract address is : ", box.address);
}

main();
