let laptop={
    cpu:'i9',
    price:'30000',

    greet: function(){
        console.log("hello");
        
    }
}

laptop.greet();


let laptop1={
    cpu:'i5',
    price:'30000',

    greet: function(){
        console.log(laptop1.cpu);
        
    }
}
laptop1.greet();

let laptop2={
    cpu:'i5',
    price:'30000',

    greet: function(){
        console.log(this.cpu);//current object
        
    }
}
laptop2.greet();
