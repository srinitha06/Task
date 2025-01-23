

//reverse number
for(i=50;i>=1;i--){
    console.log(i);

}

//sum of number
let sum=0;
for (i=0;i<10;i++){
    sum+=i;
    console.log(sum);
}
// 5 th table
let n = 5;
for (let i = 0; i <= 10; i++) {
    console.log(i + " * " + n + " = " + (n * i));
}
//pattern
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);

}
for(i=1;i<10;i++){
    if(i%2!=0){
        console.log(i);
    }
}
function abc(x,y){
    console.log(x+y);
}
abc(10,20);
let abc=(x,y)=>console.log(x+y);
abc(10,20);
function mail(x,y){
    console.log("Dear "+x);
    console.log("your are working at "+y);
    console.log("thanks for joining");
}
mail("tamil","TCS");