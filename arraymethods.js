let product=new Array();
console.log(product);
console.log(typeof product);

product.push('ball',4,{color:'red'},function(){console.log("hello");
}); //add element at last

console.log(product);
// product.pop();//remove element at last
// product.pop()
console.log(product);
product.shift();//remove element at statring
product.unshift('car');//add element at starting
console.log(product);

product.splice(1,2);// remove elements from index // 2 is no of elments
console.log(product);



