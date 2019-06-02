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
//BT3
var keo = 0;
var dollar = 0; 
var euro = 0;
while(keo<50){
	dollar -=5;
	euro +=3;
	keo++;
	while(euro>0){
		euro-=2;
		dollar+=3;
		keo++;
	}
}
	document.write('so tien phai bo' + dollar+ '<br');
	document.write('<br>');
//BT6
var invest = 2000000;
for (var day = 1 ; day <= 30 ; day++)
{
	invest = invest + invest*0.1;
}
	document.write('tong tien' +invest+ '<br>');

//BT7
// Một người đầu tư 2.000.000 VND, với lợi nhuận 10%/ngày. Mỗi ngày người đó rút 50.000 VND làm từ thiện
// Hỏi sau 30 ngày người đó còn lại bao nhiêu tiền bao nhiêu tiền?
var invest = 2000000;
for (var day = 1 ; day <= 30 ; day++)
{
	invest = invest + invest*0.1 - 5000;
}
	document.write('tong tien' +invest+ '<br>');