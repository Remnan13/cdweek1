function returnArray(){
	var arr = [];
	for(var i = 1; i<=x; i++){
		arr.push(i)
	}
	return arr;
}
var x = 255
returnArray(x);

function getEven(){
	var sum = 0;
	for(var i = 0; i<=x; i++){
		if(i%2 === 0){
			sum += i;
		}
	}
	return sum;
}
var x = 1000
getEven(x);

function getOdd(){
	var sum = 0;
	for(var i =0; i<=x; i++){
		if(i%2 !== 0){
			sum += i;
		}
	}
	return sum;
}
var x=5000;
getOdd(x);

function iterateArray(){
	var sum = 0;
	for(var i=0; i<x.length; i++){
		sum += x[i];
	}
	return sum;
}
var x = [-5,2,5,12];
iterateArray(x);

function findMax(){
	var max = x[0]
	for(var i = 1; i<x.length; i++){
		if(x[i]>max){
			max = x[i];
		}
	}
	return max;
}
x = [-3,3,5,7]
findMax();

function findAvg(){
	var sum = x[0]
	for(var i=1; i<x.length; i++){
		sum+=x[i];
	}
	var avg=sum/x.length;
	return avg;
}
var x = [1,3,5,7,20];
findAvg(x);

function arrayOdd(){
	var arr=[];
	for(var i=1; i<=x; i++){
		if(i%2 !== 0){
			arr.push(i);
		}
	}
	return arr;
}
var x = 50;
arrayOdd(x);

function greaterY(){
	var count = 0;
	for(var i=0; i<=x.length; i++){
		if(x[i]>Y){
			count++;
		}
	}
	return count;
}
var x = [1,3,5,7];
var Y = 3;
greaterY(x, Y);

function squares(){
	for(var i=0; i<x.length; i++){
		x[i]=x[i]*x[i];
	}
	return x;
}
var x = [1,5,10,-2]
squares(x);

function negativeZeros(){
	for(i=0; i<x.length; i++){
		if(x[i]<0){
			x[i] = 0;
		}
	}
	return x;
}
var x = [1,5,10,-2]
negativeZeros(x);

function maxMinAvg(){
	max = x[0];
	min = x[0];
	sum = x[0];
	for(i = 1; i<x.length; i++){
		if(x[i]>max){
			max = x[i];
		}
		if(x[i]<min){
			min=x[i]
		}
		sum += x[i]
	}
	var avg = sum/x.length;
	var nuarr = [max, min, avg];
	return nuarr;
}
var x = [1,5,10,-2]
maxMinAvg(x);

function swapValues(){
	var temp = x[0];
	x[0]=x[x.length-1];
	x[x.length-1] = temp;
	return x;
}
x = [1,5,10,-2];
swapValues(x);

function numberToString(){
	for(i=0; i<x.length; i++){
		if(x[i]<0){
			x[i] = "Dojo";
		}
	}
	return x;
}
x = [-1,-3,2];
numberToString(x);