function guessGame(){
    var guessNumber=20;
    var number=prompt("введи число");
    if(number>guessNumber){
        alert("ваше число больше");
        return guessGame();
}
else if(number<guessNumber){
    alert("ваше число меньше");
    return guessGame();
}
else{
    return alert("угадали!");
 }
}
//guessGame();

function reminder(){
    alert("ты здесь слишком долго!");

    window.location.href("");
    window.closed();
}
 
//setTimeout(reminder,5000);


function validForm(){
    var name= document.getElementById("name").value;
    console.log(name);
    var password=document.getElementById("password").value;
    console.log(password);
     var reg_name=/^[а-яёA-Z]+$/i;
     var reg_pas=/[0-9A-Z]{5,100}$/i;
     
     if(reg_name.test(name)==false){
         alert("ошибка в фио");
     }
     if(reg_pas.test(password)==false){
         alert("ошибка в пароле");

     }
}
document.querySelector(".button").addEventListener("click",validForm)



