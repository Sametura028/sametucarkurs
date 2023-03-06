var ustSayi=100;
var altSayi=20;
var ustSayi1=100;
var altSayi1=20;
var sayi=Math.random();
var sayi1=Math.random();
sayi1=sayi1*(ustSayi1-altSayi1);
sayi1=Math.floor(sayi1)+altSayi1; 
sayi=sayi*(ustSayi-altSayi);
sayi=Math.floor(sayi)+altSayi; 
 var ort=(sayi+sayi1)/2
 ort=parseFloat(ort)
alert("Ortalamanız="+ort);//üretilen sayıyı ekrana uyarı olarak veriyor
 