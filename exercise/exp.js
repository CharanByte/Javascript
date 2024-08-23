let arr=['charan','ram','raj','nandan'];
let input='charan';
check(input,arr);
function check(name,arra){
for(let a of arra){
if(name===a){
    console.log (`welcome ${a}`);;
    return;
}

}
console.log(`better luck next time`);
}