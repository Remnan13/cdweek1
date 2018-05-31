//PART ONE//

function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);

//Output = 6

function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

//Output = 6, 10

var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

//Output = 3,7

x=15;
console.log(x);
function awesome(){
    x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

//Output = 15,15,10,10

for(var i=0; i<15; i+=2){
   console.log(i);
}

//Output = 0,2,4,6,8,10,12,14

for(var i=0; i<3; i++){
   for(var j=0; j<2; j++){       
       console.log(i*j);
   }
}

//Output = 0,0,0,1,0,2

function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<x; j++){         
          console.log(i*j);
      } 
   }
}
z = looping(3,3);
console.log(z);

//Output = 0,0,0,0,1,2,0,2,4

function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<y; j++){         
         console.log(i*j);
      } 
   }
   return x*y;
}
z = looping(3,5);
console.log(z);

//Output = 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8,15

//PART TWO//

function printUpTo(x){
	for(var i=1; i<=x; i++){
		console.log(i)
	}
	if(x<0){
		console.log("negative number");
		return false;
	}
}
printUpTo(1000000);
y = printUpTo(-10);
console.log(y);

function printSum(x){
	sum = 0
	for(i=0; i<x; i++){
		sum += i;
	}
	return sum;
}
y = printSum(255)
console.log(y)

function printSumArray(x){
	sum = 0;
	for(var i=0; i<x.length; i++){
		sum += x[i];
	}
	return sum;
}
console.log ( printSumArray ([1,2,3]));