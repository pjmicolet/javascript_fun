

var myarray = [];
  for( var i = 0; i < 100; i++ ){
  myarray[i] = i;
  }
  for( var i = 1; i < 100; i++ ){
  myarray[i] = myarray[i-1] + myarray[i];
  }
  for( var i = 0; i < 100; i++ ){
  console.log("Value of i: " + myarray[i]);
  }
