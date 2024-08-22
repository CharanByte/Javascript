function Product(name,price){
    this.name=name;
    this.cost=price;

}

let pro=new Product('car',25.55);
let pro1=new Product('bike',15.55);


pro.name="electric car";
console.log(pro);
console.log(pro1);

