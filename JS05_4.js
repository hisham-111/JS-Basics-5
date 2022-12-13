



const btn = document.getElementById("btn")
const inputField = document.getElementById("number"); 



btn.onclick = ()=> {

    let mulSum = 0;
    for(let i=1; i<= parseInt(inputField.value); i++) {
        if(i % 3 == 0 || i % 5 == 0){
            mulSum += i;
        }
    }


    alert("The mulSum is : " + mulSum)

  }
