$(document).ready(function() {
   $('#sended').click(function(e2) {
      
	
	var request = new XMLHttpRequest();

request.open('POST', 'https://ropsten.infura.io/T8djBNFeuT3S1kLhk0fH');

request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Accept', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'jsonrpc': '2.0',
  'id': -29846618,
  'method': 'eth_getBalance',
  'params': ["0x40bA941094e6E74ECa3eE804C65eD0c48524842C", "latest"]
};

request.send(JSON.stringify(body));
      
      });

  });


