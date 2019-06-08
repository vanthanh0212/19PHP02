function changeContent1(image,name,id){
	document.getElementById('image').src =image;
	document.getElementById('name').innerHTML =name;
}
if (id='14'){
	document.getElementById('14').style.border = "5px solid green";
	document.getElementById('15').style.border ="none";
}
else if (id='15') {
	document.getElementById('14').style.border = "none";
	document.getElementById('15').style.border = "5px solid green";
}