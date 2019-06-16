function checkForm() {
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	if(name == ''){
		document.getElementById('errName').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errName').innerHTML = '';
	}
	if(password == ''){
		document.getElementById('errPassword').innerHTML = ' Please input your password';
	} else {
		document.getElementById('errPassword').innerHTML = '';	
	}
}
