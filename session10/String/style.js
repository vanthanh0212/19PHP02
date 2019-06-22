// Bài tập string javascript:
// Cho 1 biến chứa họ tên đầy đủ. Ví dụ: Tran Van Tuan
// Kiểm tra xem họ tên hôm bao nhiêu ký tự?
// Tách họ, tên đệm, tên ra?
// Viết họ tên đệm lên và in ra đầy đủ 
// Kiểm tra tên có ký tự n không? có và không có phân biệt hoa thường
// Thay thế tên bằng 19PHP02 và in ra đầy đủ
// Kiểm tra trong họ tên gồm bao nhiêu ký tự n?
// Bôi vàng ký tự a trong tên nếu có?
var myName = prompt("Nhập tên của bạn:"," ");
document.write('<br>1.Họ và tên là:' +myName);
function replaceSpace(replaceString){
	var newReplaceSpace; 
	while(replaceString.indexOf(' ')!= -1)
	{
		newReplaceSpace = replaceString.replace(" ","");
		replaceString= newReplaceSpace;
	}
	return replaceString;
}
function splitFirstName(name) {
	var firstSpace = name.indexOf(' ');
	var firstName = name.substring(0,firstSpace);
	return firstName;
}
function splitMidName(name) {
	var firstSpace = name.indexOf(' ');
	var lastSpace = name.lastIndexOf(' ');
	var midName = name.substring(firstSpace, lastSpace);
	return midName;
}
function splitLastName(name) {
	var lastSpace = name.lastIndexOf(' ');
	var lastName = name.substring(lastSpace, name.length);
	return lastName;
}
function checkCharInName(checkChar,name){
	if(name.indexOf(checkChar)!= -1){
		return true;
	}
	return false;
}
var lastName = splitLastName(myName);
var yesNoInName = checkCharInName('n', lastName) ? 'co':'khong';

//cau 7
function checkCharInNameNotUpperCase(checkChar, name) {
	var name = name.toLowerCase();
	var checkChar = checkChar.toLowerCase();
	if (name.indexOf(checkChar)!= -1){
		return true;
	}
	return false;
}

function checkCharInFullName(checkChar, fullName) {
	var checkChar = checkChar.toLowerCase();
	var fullName = fullName.toLowerCase();
	var count = 0;
	var tmpName = '';
	while(fullName.indexOf(checkChar)!= -1) {
		count++;
		tmpName = fullName.substring(fullName.indexOf(checkChar) 
			+ checkChar.length, fullName.length)
		fullName = tmpName;
	}
	return count;
}
function changeColorCharInName(checkChar,name){
	var checkCharLower = checkChar.toLowerCase();
	var nameLower = name.toLowerCase();
	var newName = '';
	var newNameTmp = '';
	while(nameLower.indexOf(checkChar)!= -1){
		newNameTmp = name.substring(0,nameLower.indexOf(checkChar))+'<span>' + checkChar +'</span>';
		nameLower = nameLower.substring(nameLower,indexOf(checkChar) + 1, nameLower.length);
		newName +=newNameTmp;
	}
	if(name.lastIndexOf(checkChar)<name.length){
		
	}
}
function checkCharAInName(checkCharA,name){
	if(name.indexOf(checkCharA)!= -1){
		return true
	}
	return false
}

var yesNoAInName = checkCharAInName('a',myName)?'co':'khong';
document.write('<br>2. Độ dài của họ và tên là:' +replaceSpace(myName).length);
document.write('<br>3. Họ là:' +splitFirstName(myName));
document.write('<br>3. Tên là:' +splitLastName(myName));
document.write('<br>3. Tên đệm là:' +splitMidName(myName));
document.write('<br>4. Họ viết hoa là:' +splitFirstName(myName).toUpperCase());
document.write('<br>4. Tên đệm viết hoa là:' +splitMidName(myName).toUpperCase());
document.write('<br>4. Tên viết hoa là:' +splitLastName(myName).toUpperCase());


document.write('<br>5.' + yesNoInName + ' ký tự n trong tên của bạn');

document.write('<br>6. Thay thê tên PHP02 là: ' + myName.replace(lastName,'19PHP02'));
document.write('<br>7. Co '+ checkCharInFullName('n', myName) + ' n trong ten cua ban')
document.write('<br>8.' +yesNoAInName+ ' ky tự a');