const HPA = artifacts.require("HPA");

module.exports = function (deployer) {
  // adminAddress = '0xccbff095e80ef81e36E914b3568525695EfBaDC4';
  // console.log("admin address: ",adminAddress);
  deployer.deploy(HPA);

};
