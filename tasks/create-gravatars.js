require("@nomiclabs/hardhat-ethers");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("create-gravatars", "Adds gravatars for the example contract")
  .addOptionalParam(
    'address',
    'Contract deployed address (default: 0x5FbDB2315678afecb367f032d93F642f64180aa3)',
    '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  )
  .setAction(async (taskArgs) => {
    // deterministically
    const Gravity = await ethers.getContractAt('GravatarRegistry', taskArgs.address);
    await Gravity.functions.createGravatar('Ship', 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80');
    await Gravity.functions.createGravatar('Landscape', 'https://images.unsplash.com/photo-1625252595576-d1fbbd522453?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
});
