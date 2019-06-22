 
function numbers(val) {
	document.getElementById('Result').value += val
}
function clear() {
	var val = document.getElementById('Result').value;
}
function calculation() {
	let x = document.getElementById('Result').value
	let y =eval(x)
	document.getElementById('Result').value = y;
}