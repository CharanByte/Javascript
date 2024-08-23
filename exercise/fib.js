let arr=[];
let first=0
let second=1;
arr.push(first);
arr.push(second)
let out=len(5);
function len(length){

 for(var i=3;i<=length;i++){
    let next=first+second;
    arr.push(next);
    first=second;
    second=next
 }
 return arr
}
console.log(out)