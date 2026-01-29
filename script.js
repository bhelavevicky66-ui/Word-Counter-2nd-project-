let k=document.getElementById("textarea")

k.addEventListener('input',function(){
    let tex =k.value;
    let char=tex.trim();
    document.getElementById("chare").innerHTML=char.length;

    k.addEventListener('input',function(){
let word=char.split(" ");
let space=word.filter(function(elm){
return elm != "";
});
document.getElementById("word").innerHTML=space.length;
    })

  k.addEventListener('input',function(){
   let sen=char.split(".");
   let space=sen.filter(function(elm){
return elm != "";
   })
   document.getElementById("sen").innerHTML=space.length;

  })
});