
var random = Math.random();
random= random*10
var rand= Math.round(random);
var user=0;

for(var i=0; i<5;i++){
     
     user= prompt("Enter any number");
     
     if(user < rand){
         alert((i+1)+"the number is greater than your input\n");
     }
     else if(user>rand){
        alert((i+1)+"the number is lesser than your input\n");
     }
     else{
        alert((i+1)+"the number is equal! correct\n");
        break;
     }

     
}




