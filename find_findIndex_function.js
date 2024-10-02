let arr=[3,5,61,8,45,33];

const ref=arr.find(function(num){
    return num>5;
})

console.log(ref);


const ref1=arr.findIndex(function(num){
    return num>5;
})

console.log(ref1);
