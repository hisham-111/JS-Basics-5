
const btnProduct = document.getElementById("btnProduct");
const btnSum = document.getElementById("btnSum");
const inputField = document.getElementById("number"); 




btnSum.onclick = ()=> {

    
    let com = 0;
    for(let i=1; i<= parseInt(inputField.value); i++) {
        
            com += i;

    }
    alert("computing the sum : "+ com )
     


  }

  btnProduct.onclick = ()=> {


    let com = 1;
    for(let i=1; i<= parseInt(inputField.value); i++) {
        
            com *= i;
    }
    alert("computing the product : "+ com )
   

  }