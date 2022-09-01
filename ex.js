
let qtes = document.querySelectorAll(".qte");
let btnplus = document.querySelectorAll(".plus");
let btnminus = document.getElementsByClassName("minus");
let trashs = document.querySelectorAll(".ti");
let hearts = document.querySelectorAll(".fas");

for(let i=0;i<btnplus.length;i++){
    
btnplus[i].addEventListener('click',function(){  
    
qtes[i].innerHTML++;

total();
}) 

}
for(let i=0;i<btnplus.length;i++){
    btnminus[i].addEventListener('click',function(){
    if (qtes[i].innerHTML>0){
        qtes[i].innerHTML--;
       total();
    }
})
}
 //fonction totale 
function total(){
    let qtes= document.querySelectorAll(".qte")
    let price =document.querySelectorAll(".prix");
    let totale=0;
   for( let i= 0;i<price.length ;i++){
 totale = totale + price[i].innerHTML*qtes[i].innerHTML ;
}
 document.getElementById("total").innerHTML=totale;
}

//    First Like Button  
    for(let i=0;i<hearts.length;i++){
      hearts[i].addEventListener('click',function() {
               if (hearts[i].style.color =="red") {
                hearts[i].style.color = "grey"
               }
               else{
                hearts[i].style.color = "red"
               }   
            })
            }

//delete button  

for(let i=0;i<trashs.length;i++){
    trashs[i].addEventListener("click",function() {
        trashs[i].parentElement.parentElement.remove();
        total();
    });
}