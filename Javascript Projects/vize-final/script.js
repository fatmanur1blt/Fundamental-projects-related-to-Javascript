document.getElementById("btn")
document.getElementById("sonuc")


function sorgula()
{
 var vize=document.getElementById("vize").value;
 var final=document.getElementById("final").value;

 if(
    (vize*40/100)+(final*60/100)>60
    )

   { 
     var islem="GEÇTİNİZ";
     document.getElementById("sonuc").innerHTML=islem;
   }

   else
   { 
     var islem="KALDINIZ";
     document.getElementById("sonuc").innerHTML=islem;
   }

}