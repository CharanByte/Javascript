let add=function(num1,num2){
    return num1+num2;
}

let a=add(4,6);
console.log(a);


let add1=function(num1,num2,num3){
    console.log(num1,num2,num3);
    
    return num1+num2+num3;
}

let a1=add1(4,6);
console.log(a1);


let add2=function(num1,num2,num3=2){
    console.log(num1,num2,num3);
    
    return num1+num2+num3;
}

let a2=add2(4,6);
console.log(a2);


