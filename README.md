# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Plugins

```shell
// This plugin will use to update smart contracts
$ npm i --save-dev @openzeppelin/hardhat-upgrades
$ npm i @nomiclabs/hardhat-ethers
```

## scripts

We will deploy a scripts with a new method using ethers and upgrades from hardhat because this is not a normal contract. This is the upgradeable smart contract.

```shell
const num1 = await upgrades.deployProxy(Box,[2],{
initializer:"initializer"
});
```
