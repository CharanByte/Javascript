let laptop={
    cpu: 'jdkj', //key:value
    color : 'red',
    cost :25000,
    location:{
        brand:'dell'
    }
  }

  for(let key in laptop){
    console.log(key,laptop[key]);
    
  }

  for(let key in laptop.location){
    console.log(key,laptop.location[key]);
    
  }

 
  