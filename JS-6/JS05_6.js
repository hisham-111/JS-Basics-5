




// const btn = document.getElementById("btn");

const inputField = document.getElementById("number"); 




btn.onclick = ()=> {

  let  i, j, total;


  for(i = 1; i <= 12 ; i++) {
    for (j = 1 ; j <= 12 ; j ++){

      total =  i * j ;
      total = " " + total 


         // Display result

         document.write(total);
 

       } // end inner j loop


    document.write("<BR>"); // end of line break
    
 
   
  
     
        
     

  }
}







