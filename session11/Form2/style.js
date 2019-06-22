// 1. Taọ form tính tiền điện gồm:
// Họ tên, số điện đầu kỳ, số điện cuối kỳ, ngày đầu kỳ, ngày cuối kỳ
// 2. Validate các trường nhập không được để trống
// 3. Số điện cuối kỳ phải >= số diện đầu kỳ, ngày cuối kỳ phải lớn hơn
//  hoặc bằng ngày đầu ky
// 4. Tính tiền điện với: 100 số đầu tiên tính giá 1.500 VND/số; 200 
// số tiếp theo tính 2.000 VND/số; còn lại tính 3.500 VND/số
// 5. In ra màn hình phiếu tính tiền điện cơ bản: Họ tên...Tính điện
//  từ ngày...đến ngày...sử dụng...số với số tiền là:....
function allInOne() {
  if (checkForm()) {
    sumDay();
    totalCost();
  }
}
function checkForm() {
	var name = document.getElementById('name').value;
	var firstNum = document.getElementById('firstNum').value;
	var lastNum = document.getElementById('lastNum').value;
	var firstDate = document.getElementById('firstDate').value;
	var lastDate = document.getElementById('lastDate').value;
	if(errName == ''){
		document.getElementById('errName').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errName').innerHTML = '';
	}
	if( firstNum == ''){
		document.getElementById('errFirstNum').innerHTML = ' Please input first number';
	} else {
		document.getElementById('errFirstNum').innerHTML = '';	
	}
	if( lastNum == ''){
		document.getElementById('errLastNum').innerHTML = ' Please input last number';
	}else if (lastNum < firstNum) {
		document.getElementById('errLastNum').innerHTML = 'Please input repeat last number';	
	} else {
		document.getElementById('errLastNum').innerHTML = '';
	}
	if( firstDate == ''){
		document.getElementById('errFirstDate').innerHTML = ' Please input first date';
	} else {
		document.getElementById('errFirstDate').innerHTML = '';	
	}
	if( lastDate == ''){
		document.getElementById('errLastDate').innerHTML = ' Please input last date';
	} else {
		document.getElementById('errLastDate').innerHTML = '';	
	}
	if (firstDate > lastDate) {
		document.getElementById('errLastDate').innerHTML = 'Please check between first date and last date';
	} else {
		document.getElementById('errLastDate').innerHTML = '';
	}
	if (errName != '' && firstNum!= '' && lastNum !='' && firstDate !='' && lastDate !='') {
		alert('OK');
	} else {
		alert('VUi lòng nhập đầy đủ');
	}
}
function sumDay() {
  var lastDay = document.getElementById('lastDate').value;
  var firstDay = document.getElementById('firstDate').value;
  var dayElapsed = (lastDay - firstDay);
  console(sumDay);
}
// function totalCost() {
//   const powerConsumption = lastNum - firstNum;
//   let powerCost = 0;
//   for (let i = 0; i < powerConsumption; i++) {
//     if (i <= 100) powerCost += 1500;
//     else if (i > 100 && i <= 200) powerCost += 2000;
//     else powerCost += 3500;
//       alert(totalCost());
//  