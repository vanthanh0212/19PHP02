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
