

var res = document.getElementById('on').textContent;

function display() {
	var amount = document.getElementById("amount").value;
	var ID = document.getElementById('id').value;

	if (!amount || !ID) {
		alert("Please enter both ID and AMOUNT to see your result");
		return;
	}

	var balance = amount;
	var unit = amount / 4;
	document
		.getElementById('unitvalue')
		.innerHTML = unit;

	document
		.getElementById('balancevalue')
		.innerHTML = balance;

	console.log(res);
	typeof(res);
	

}