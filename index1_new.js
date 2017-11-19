web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[{"constant":true,"inputs":[],"name":"wellcomeString","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newWellcomeString","type":"string"}],"name":"setWellcomeString","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
WellcomeContract = web3.eth.contract(abi);
contractInstance = WellcomeContract.at('0xe83fe69be4b7fcc2c35436a39a13121077a65744');

function updateWellcomeString() {
  let val = contractInstance.wellcomeString.call().toString();
  $("#wellcomeStringContainer").html(val);
}

function changeWellcomeString() {
  newWellcomeString = $("#wellcomeStringInput").val();
  contractInstance.setWellcomeString(newWellcomeString, {from: web3.eth.accounts[0]}, function() {
    updateWellcomeString();
  });
}

$(document).ready(function() {
  updateWellcomeString();
});
