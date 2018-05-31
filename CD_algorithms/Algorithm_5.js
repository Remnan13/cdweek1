function resetNegatives(){
	for(var i = 0; i<x.length; i++){
		if(x[i]<0){
			x[i] = 0;
		}
	}
	return x;
}
x = [1,2,-1,-3];
resetNegatives(x);

function moveForward(){
	var temp = x[0]
	for(var i = 0; i<x.length; i++){
		x[i] = x[i+1]
	}
	x.push(0);
	return x;
}
var x = [1,2,3];
moveForward();

function reverseArray(){
	for(var i = 0; i<x.length/2; i++){
		var temp = x[i];
		x[i] = x[x.length-i-1];
		x[x.length - i -1] = temp;
	}
	return x;
}
var x = [1,2,3];
reverseArray();

function repeatTwice(x){
	var x = [19, "Pika", 93, "Chu!"];
	nuarr = []
		for(var i=0; i<x.length; i++){
			nuarr.push(x[i], x[i]);
		}
		return nuarr;
	}
repeatTwice();