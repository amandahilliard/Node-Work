function randomNumber (a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if(isNaN(a) || isNaN(b)){
        console.log("You must provide two numbers!");
        return;
    }
    let min = Math.min(a,b);
    let numOptions = Math.abs(b-a) + 1;
   
    console.log(Math.floor(Math.random() * numOptions) + min);
}
module.exports = randomNumber;