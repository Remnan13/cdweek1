function greaterY(x){
	Y = 3;
	sum = 0;
	arr = [1,2,3,4,5,7,9,14];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > Y){
			sum = sum + 1;
		}
	}
	return sum;
}
greaterY();

function maxMinAvg(x){
	x = [1,2,3,4,5,6,7,8];
	var max = x[0];
	var min = x[0];
	var sum = 0;
	for(var i=1; i<x.length; i++){
		if(x[i]>max){
			max = x[i];
		}
		if(x[i]<min){
			min=x[i];
		}
		sum = sum + x[i];
	}
	var avg = sum/x.length;
	var nuarr = [max, min, avg];
	return nuarr;
}
maxMinAvg();

function printNegaDojo(x){
	var x = [5, 10, -7, 8, -1, 0];
	nuarr = []
	for(var i=0; i<x.length; i++){
		if(x[i] < 0){
			x[i] = "Dojo";
		}
		nuarr.push(x[i])
		}	
	return nuarr;
}
printNegaDojo();

function removeVals(x,y,z){
	var nuarr= [];
	for(var i = 0; i < x.length; i++){
		if(i<y){
			nuarr.push(x[i]);
		}
		if(i>z){
			nuarr.push(x[i]);
		}
	}
	return nuarr;
}
var x = [20,30,40,50,60,70];
var y = 2;
var z = 4;
removeVals(x,y,z)