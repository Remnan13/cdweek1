///PART ONE///

function a(){
	return 35;
}
console.log(a());
//Outcome = 35

function a(){
	return 4;
}
console.log(a()+a());
//Outcome = 8

function a(b){
    return b;
}
console.log(a(2)+a(4));
//Outcome = 6

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
//Outcome = 9

function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
//Outcome = 40

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
//Outcome = 4

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//Outcome = 30

function a(b){
    for(i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//Outcome = 3,4

function a(){
    for(i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
//Outcome = 2,5,8,11

function a(b,c){
    for(i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//Outcome = 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0

function a(){
    for(i=0; i<10; i++){
       for(j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//Outcome = 0,1,2,3,4,5,6,7,8,9 (listed 9 times, 0 count increments with each set)

function a(){
    for(i=0; i<10; i++){
        for(j=0; j<10; j++){
            console.log(i,j);
        }
    console.log(j,i);
}
//Outcome = 0,1,1,2,2,3,3,4,4,5,...etc

z = 10;
function a(){
    z = 15;
    console.log(z);
}
console.log(z);
//Outcome = 10

z = 10;
function a(){
        z = 15;
        console.log(z);
}
a();
console.log(z);
//Outcome = 15, 15

z = 10;
function a(){
    z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//Outcome = 15, 15