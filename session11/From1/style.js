// 1.Tạo form đăng ký gồm:
// Tên (input text)
// Email (input text)
// Gioi tính (input date)
// Ngày sinh (input radio)
// Quên quán ((input select option)
// 2. Validate các trường không được để trống
// 3. Nếu các trường validate OK thì thông báo đã đăng ký thành công



// 1. Taọ form tính tiền điện gồm:
// Họ tên, số điện đầu kỳ, số điện cuối kỳ, ngày đầu kỳ, ngày cuối kỳ
// 2. Validate các trường nhập không được để trống
// 3. Số điện cuối kỳ phải >= số diện đầu kỳ, ngày cuối kỳ phải lớn hơn
//  hoặc bằng ngày đầu ky
// 4. Tính tiền điện với: 100 số đầu tiên tính giá 1.500 VND/số; 200 
// số tiếp theo tính 2.000 VND/số; còn lại tính 3.500 VND/số
// 5. In ra màn hình phiếu tính tiền điện cơ bản: Họ tên...Tính điện
//  từ ngày...đến ngày...sử dụng...số với số tiền là:....
function checkForm() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var radio1 = document.getElementById('Nam').checked;
	var radio2 = document.getElementById('Nu').checked;
	var date1 = document.getElementById('myDate').value;
	var add = document.getElementById('myAdd').value;
	if(name == ''){
		document.getElementById('errName').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errName').innerHTML = '';
	}
	if(email == ''){
		document.getElementById('errEmail').innerHTML = ' Please input your email';
	} else {
		document.getElementById('errEmail').innerHTML = '';	
	}
	if ((radio1=='')&&(radio2=='')) {
		document.getElementById('errGender').innerHTML='Please select your gender';
	}else {
	document.getElementById('errGender').innerHTML=' ';
   }
   if (date1 == ''){
   	document.getElementById('errDate').innerHTML = 'Please input your date';
   } else {
   		document.getElementById('errDate').innerHTML = ' ';
   }
       // regular expression to match required date format
    if (add == " "){
    	document.getElementById('errAddress').innerHTML = 'Please input your address';
    }else {
    	document.getElementById('errAddress').innerHTML = ' ';
    }
    if (name != ' ' && email != ' ' && ((radio1 !=' ') || (radio2 !=' ')) && date1 != ' ' && add != ' ') {
    	alert('OK');
    } else {
    	alert('VUi lòng nhập đầy đủ');
    }
}