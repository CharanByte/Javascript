//two ways

let names=new Array();
names.push(2)
names[1]='charan'
console.log(typeof names);
console.log(names);

let a=new Array(3,'charan');
console.log(a);

let data=[2,'ram',20];
data.push(25)

console.log(data)

console.log(data[1]);

console.log(typeof  data);
data.pop(2)
data.pop(2)
console.log(data);

let data1=[5,'cha',{name:'raju'},function(){console.log("hi")
}]

data1[3]()
console.log(data1[2].name);


