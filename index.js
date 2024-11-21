let white = document.querySelector("#white");
var text99 = document.querySelector("#text99")
let image = document.querySelector("#imge")
let all = document.querySelector("#all");
let gray = document.querySelector("#gray");
let beige = document.querySelector("#beige");
let black = document.querySelector("#black");
var text98= document.querySelector("#text98")
var after = document.querySelector("#after")
var before = document.querySelector("#before")
var imgs=document.querySelector("#imgs")

white.addEventListener('click' , function(){
    text99.innerHTML="iPhone 16 Pro Max 6,9″1 et iPhone 16 Pro 6,3″1 en titane blanc"
    image.src = "white.png"
 })
 all.addEventListener('click' , function(){
    text99.innerHTML="iPhone 16 Pro 6,3″1 en quatre finitions"
    image.src = "all.png"
 })
 gray.addEventListener('click' , function(){
    text99.innerHTML="iPhone 16 Pro Max 6,9″1 et iPhone 16 Pro 6,3″1 en gray"
    image.src = "gray.png"
 })
 beige.addEventListener('click' , function(){
    text99.innerHTML="iPhone 16 Pro Max 6,9″1 et iPhone 16 Pro 6,3″1 en beige"
    image.src = "beige.png"
 })
black.addEventListener('click' , function(){
    text99.innerHTML="iPhone 16 Pro Max 6,9″1 et iPhone 16 Pro 6,3″1 en titane noir"
    image.src = "black.png"
 })


var arr=[
   {
   text:"Dolby Vision 4K à 120 i/s 4 micros de qualité studio.Un studio pro dans votre poche",
   background:"imgs1.png",
   },
   {
   text:"Notre bordure la plus fine à ce jour. Pour des écrans encore plus vastes. Éblouissant.",
   background:"imgs2.png",
   },
   {
   text:"Toute nouvelle puce A18 Pro. Performances inégalées. Efficacité inédite.",
   background:"imgs3.png",
   },
   {
   text :"Si fluide. Si rapide. La toute nouvelle Commande de l appareil photo vous obéit au doigt et à l œil.",
   background:"imgs4.png",
   },
   {
   text:"iOS 18. Avec de nouvelles options de personnalisation.",
   background:"iphone16pro-removebg-preview.png",
   }];
var i=0
   after.addEventListener('click', function(){
      if(i >=4){
        i=0;
      }
      
      i++;
      console.log(i)
      text98.innerHTML=arr[i].text
      imgs.src=arr[i].background
 
   });
   before.addEventListener('click', function(){
    if(i <=0){
      i=3;
    }
    
    i--;
    console.log(i)
    text98.innerHTML=arr[i].text
    imgs.src=arr[i].background

 });

 function change(){
    if(i >=4){
        i=0;
      }
      
      i++;
      console.log(i)
      text98.innerHTML=arr[i].text
      imgs.src=arr[i].background
 }
 setInterval(change , 3000)
