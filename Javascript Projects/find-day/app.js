document.getElementById("#btn");
document.getElementById("#result");
function Find_Day()
{
    var day=new Date().getDay();
    switch(day)
    {
        case 0:
            day="SUNDAY";
            break;

        case 1:
            day="MONDAY";
            break;

        case 2:
            day="TUESDAY";
            break;

        case 3:
            day="WEDNESDAY";
            break;

        case 4:
            day="THURSDAY";
            break;

        case 5:
            day="FRIDAY";
            break;

        case 6:
            day="SATURDAY";
            break;   
    }
    document.getElementById("result").innerHTML=day;
}