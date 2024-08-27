var houseKepper1=new HouseKepper("jaya",24,7,["beedroon","hall"],{weight:50},function(){});

function HouseKepper(name,age,height,place,wei,fun){
    this.name=name;
    this.age=age;
    this.height=height;
    this.place=place;
    this.thuka=wei;
    this.fun=fun;
}
for(let i in houseKepper1){
console.log(i,houseKepper1[i]);
}