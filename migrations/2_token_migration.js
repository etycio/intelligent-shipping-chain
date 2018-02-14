var ETYCToken = artifacts.require("./ETYCToken.sol");
var ETYCSale = artifacts.require("./ETYCSale.sol");

Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };

module.exports = function(deployer, network, accounts) {
    //console.log("Accounts: " + accounts);
    //deployer.deploy(ETYCToken, accounts[1]);

    //const admin = accounts[1];
    //const admin = '0x9A264e803f69EfeB1539F09f2fF0391C4b57F3a4';
    
    const admin = '0xD6156950A061d0fBe21d9cBda460B918Bb32cB30';
    const fundingMin = 1; // In Ether
    const fundingCap = 120000; // In Ether
    const minContribution = 0.5 * Math.pow(10, 18);
    const rate = 6000;
    
    // Testing Dates
    //const startTime = new Date().getTime() / 1000;
    //const endTime =  startTime + (86400 * 15); // 15 days

    // Live dates
    const startTime = new Date('Thu, 15 Feb 2018 00:00:00 GMT').getUnixTime();
    const endTime = new Date('Sat, 02 Jun 2018 00:00:00 GMT').getUnixTime();

    //deployer.deploy(ETYCSale, admin, fundingMin, fundingCap, minContribution, startTime, endTime, rate, "0x48d106abface57926b59163341615285eda152e4");

    deployer.deploy(ETYCToken, admin).then(function() {
        return deployer.deploy(ETYCSale, admin, fundingMin, fundingCap, minContribution, startTime, endTime, rate, ETYCToken.address);
    });

};