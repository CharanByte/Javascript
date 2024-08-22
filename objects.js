let laptop={
  cpu: 'jdkj',
  color : 'red',
  cost :25000
}
console.log(laptop.color);
console.log(laptop['color']);
console.log(laptop.ram);


let laptop1={
    cpu: 'jdkj',
    color : 'red',
    cost :25000,
    location:{
        brand:'dell'
    }
  }
  console.log(laptop1);
  console.log(laptop1.location);
  console.log(laptop1.location.brand.length);
  console.log(laptop1.location?.brand1?.length);
  
  
  
