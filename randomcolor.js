
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1")
    let random_color = getcolor();
    h1.innerText = random_color;

    console.log("updated random color");

    let div = document.querySelector("div");
    div.style.backgroundColor = random_color;
    
});
function getcolor()
 {
   let red=Math.floor(Math.random()*255);
   let blue=Math.floor(Math.random()*255); 
   let green=Math.floor(Math.random()*255); 
    
   let color=`rgb(${red} , ${green} , ${blue})`
   return color;
    
 }

 let box = document.querySelector(".box")
 box.addEventListener("mouseenter",function(){
    console.log("mouse entered in box");
 })

