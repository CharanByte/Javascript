let year=2003;
if(year%4===0){
    if(year%100===0){
        if(year%400===0){
            console.log(`${year} is  a leaf year`);
        }
        else{
            console.log(`${year} is not a leaf year`);
        }
    }
    else{
        console.log(`${year} is  a leaf year`);
    }
}
else{
    console.log(`${year} is not a leaf year`);
    
}