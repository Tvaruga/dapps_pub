web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":true,"inputs":[],"name":"wellcomeString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newWellcomeString","type":"string"}],"name":"setWellcomeString","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
WellcomeContract = web3.eth.contract(abi);
contractInstance = WellcomeContract.at('0xe83fe69be4b7fcc2c35436a39a13121077a65744');

$(document).ready(function() {
    let val = contractInstance.wellcomeString.call().toString();
    $("#wellcomeStringContainer").html(val);
});
