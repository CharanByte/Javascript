let arr=[2,4,5,7,9];

let ref=arr.filter((num)=>{
    return num>5;
})

console.log(ref);


let a=[];
arr.forEach(function foreach(num){
    if(num>5)
        a.push(num);
}
)
console.log(a);

