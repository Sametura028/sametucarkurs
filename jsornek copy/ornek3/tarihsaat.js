var tarih=new Date();
	var yil=tarih.getFullYear();
	var ay=tarih.getMonth()+1;
	var gun=tarih.getDate();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
	console.log(gun+"/"+ay+"/"+yil+" "+saat+":"+dakika+":"+saniye);