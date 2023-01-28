let sayilar = [1,5,219,6708,8];

function maxItem(arr){
    return Math.max.apply(null,arr);
}

function minItem(arr){
    return Math.min.apply(null,arr);
}

let btn = document.createElement("button");
btn.innerHTML= "Sayıları Getir";
btn.addEventListener("click" , sonuc);
document.getElementById("deneme").appendChild(btn);

function sonuc(){
    let html = document.querySelector("#sayi").innerHTML = `
    Listedeki En büyük Sayi ${maxItem(sayilar)} En Küçük sayi ise ${minItem(sayilar)} 'dır.
    ` 
    document.querySelector("button").classList.add("passive");
}

