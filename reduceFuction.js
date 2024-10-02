let arr=[3,5,6,7,8,9];

const ref=arr.reduce((previous,current)=>{
    return previous+current;
})
console.log(ref);

let a=0;
arr.forEach(function foreach(num){
   a=a+num;
}
)
console.log(a);
