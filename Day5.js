let age = 24;
if(age>100){
    console.log("you are senior citizen");
}
else{
    console.log("you are not a senior citizen");
}
let alp= 'b';
switch(alp){
    case 'a':
        console.log("a is vowel");
        break;
    case 'e':
        console.log("e is vowel");
        break;
    case 'i':
        console.log("i is vowel");
        break;
    case 'o':
        console.log("o is vowel");
        break;
    case 'u':
        console.log("u is vowel");
        break;
    default:
        console.log("not a vowel");
}  
let a=10;
if(a>0){
    console.log("a is positive");
}
else{
    console.log("a is negative");
}
let b=10;
if(b%2==0){
    console.log("b is even");
}
else{
    comsole.log("b is odd");
}
    let m = 85;

switch (true) {
    case (m > 90):
        console.log("A grade");
        break;

    case (m <= 90 && m > 80):
        console.log("B grade");
        break;

    case (m <= 80 && m > 70):
        console.log("C grade");
        break;

    case (m <= 70 && m > 60):
        console.log("D grade");
        break;

    default:
        console.log("Fail");
        break;
}
        if (m > 90) {
    console.log("A grade");
} else if (m <= 90 && m > 80) {
    console.log("B grade");
} else if (m <= 80 && m > 70) {
    console.log("C grade");
} else if (m <= 70 && m > 60) {
    console.log("D grade");
} else {
    console.log("fail");
}
/*

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
mail("tamil","TCS");*/