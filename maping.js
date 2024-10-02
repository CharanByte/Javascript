let arr=[2,4,5,6,7,8];

const map=arr.map((x)=>{
    return x*3;
});
console.log(map);


let newarr=[];
const ref=arr.forEach((x)=>{
    //return x+2; undifined
    newarr.push(x+1);
})
console.log(newarr);
