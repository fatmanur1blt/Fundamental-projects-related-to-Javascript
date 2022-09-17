document.getElementById("button")
function calculate_hypotenuse()
{
    var a=document.getElementById("one").value;
    var b=document.getElementById("two").value;
    var calculate=Math.sqrt((a*a)+(b*b));
    document.getElementById("result").innerHTML=calculate;
}