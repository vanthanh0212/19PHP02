alert("Hello PHP");
document.getElementById('demo1').innerHTML ='Hello PHP';
document.write('<h1>Hello PHP</h1>');
console.log('Hello Test');

var x=5;
x = x+9;
console.log(x);

var varName;
var varName1 = 'PHP02';
var varName2, varName3;

function nameFunction()
{
	document.write('My Function');
}
 nameFunction();
 document.write('<br>');
 function sumNumber( a = 4, b = 5)
 {
 	return a + b;
 }
 document.write(sumNumber(7, 8));

 var c =sumNumber(5,8);
 console.log(c);

 // if else
 // if (điều kiện)
 //elseif else

 //BT:
 //1. Cho trước 1 số n kiểm tra số n, kiểm tra chẵn hay lẻ
 //2. Cho trước 3 số a, b ,c kiểm tra số nào lớn nhất trong 3 số
 var c = 9;
 if (c%2==0)
 {
 	document.write('<p>Đây là số chẵn</p>');
 }
 else {
 	document.write('<p>Đây là số lẻ </p>');
 }

for (var i = 0; i < 10 ; i++) {
	document.write('Number '+ i + '<br>');
}




for (var i = 0; i <= 100; i++){
    if (i % 15 == 0){
        document.write('so ' + i + ' chia het cho 15 <br> ');
    } else if (i % 5 == 0){
        document.write('so ' + i + ' chia het cho 5 <br> ');
    } else if (i % 3 == 0){
        document.write('so ' + i + ' chia het cho 3 <br> ');
    } 
}




//BT1
var binhBook = 27;
var minhBook = binhBook/3;
var soLanChuyen = 0;
while (binhBook != minhBook*2) {
	binhBook--;
	minhBook++;
	soLanChuyen++;
}
document.write('So lan Binh chuyển sách cho Minh để: ...' + soLanChuyen);

//BT2
var money =2000;
var candy = 0;
var candyVo =0;
while (money>0) {
	money -=200;
	candy ++;
	candyVo ++;
	while(candyVo >=2) {
		candyVo-=2;
		candyVo++;
		candy++
	}
}
document.write('so keo mua được là : ' +candy);

//BT3 
//BT4: Dũng có 50 viên bi gồm 2 loại: bi xanh và bi đỏ.
// Biết rằng nếu lấy 2/5 số bi xanh cộng với 3/4 số bi đỏ thì được 27 viên bi. 
//Hỏi mỗi loại có bao nhiêu viên bi?


//BT4
var bixanh = x;
var bido = y;
for(var x  = 50; x>0 ;x--)
{
for (var y = 50; y>0 ;y--)
{
if((x+y==50) && (2/5*x + 3/4*y == 27) )
{
document.write('loai bixanh ' + x +' <br>');
document.write('loai bido ' + y +' <br><br>');
}  
}
}


//BT5 BT5:Một hộp có 120 viên bi gồm bốn màu : đỏ , xanh , vàng, trắng. 
//Số bi màu đỏ chiếm 1/5 tổng số bi , số bi màu xanh chiếm 30% tổng số bi , còn lại là bi màu vàng và trắng .
//A) Tính số bi màu đỏ ; số bi màu xanh 
//b) Tính số bi màu vàng ; số bi màu trắng biết tỉ số giữa số bi trắng và số bi màu vàng là 3/7

var sum = 120;
var red = sum/5;
var blue = (30*sum)/100;
	document.write('loai bido: '+red+'<br>');
    document.write('loai bixanh: ' +blue+'<br><br>');
 for(var white  = 60; white>0 ; white--)
{
   for (var yellow = 60 ; yellow > 0 ; yellow--)
      {
         if((yellow+white==60) && (white/yellow == 3/7) )
             {
				document.write('loai bitrang ' + white +' <br>');
				document.write('loai bivang ' + yellow +' <br><br>');
			}  
	}
}
