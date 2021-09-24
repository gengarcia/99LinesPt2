document.addEventListener("DOMContentLoaded", function(){
  let button = document.getElementById("button");
 
     button.addEventListener("click", function(){
     
     let friends = ["Paola", "Jess", "Yesi", "Steezy", "Liz"]; 
 
     for (let i=0; i<friends.length; i++){
      
         const div = document.createElement("div");
         const heading = document.createElement("h3");
  
         document.body.appendChild(div);

         div.className = "friend";

         div.innerHTML= "<h3 class='name'>" + friends[i].toUpperCase() + "</h3>";    
    
         for (let j=99; j>0; j--){

             if (j===1){
                 const p = document.createElement("p");
                 p.innerHTML =  j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file";   
                 div.appendChild(p); 
             } else { 
                 const p = document.createElement("p");
                 p.innerHTML =  j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j-1) + " lines of code in the file";      
                 div.appendChild(p); 
             } 
         };
     };
     
 
 
     });
 });
