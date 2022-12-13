const lowNumber = parseInt(prompt('Enter lower number: '));
const highNumber = parseInt(prompt('Enter higher number: '));



for (let i = lowNumber; i <= highNumber; i++) {
    let sign = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            sign = 1;
            break;
        }
    }

   
    if (i > 1 && sign == 0) {
        alert(i);
    }
}