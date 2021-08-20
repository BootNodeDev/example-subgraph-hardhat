require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("create-gravatars", "Adds gravatars for the example contract")
  .addParam('address', 'Contract deployed address (default: 0x5FbDB2315678afecb367f032d93F642f64180aa3)')
  .setAction(async ({ address = '0x5FbDB2315678afecb367f032d93F642f64180aa3' }) => {
    // deterministically
    console.log(address)
    const Gravity = await ethers.getContractAt('GravatarRegistry', address);
    await Gravity.functions.createGravatar('Carl', 'https://thegraph.com/img/team/team_04.png');
    await Gravity.functions.createGravatar('Lucas', 'https://thegraph.com/img/team/bw_Lucas.jpg');
});
