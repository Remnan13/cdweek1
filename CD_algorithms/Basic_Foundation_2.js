function biggieSize(){
	for(i=0; i<x.length; i++){
		if(x[i]>0){
			x[i] = "big";
		}
	}
	return x;
}
x = [-1,3,5,-5]
biggieSize(x);

function printLowReturnHigh(){
	var low = x[0];
	var high = x[0];
	for(i=0; i<x.length; i++){
		if(x[i]>high){
			high = x[i];
		}
		if(x[i]<low){
			low = x[i];
		}
	}
	console.log(low);
	return high;
}
var x = [1,3,5,8]
printLowReturnHigh(x);

function printPenultimateReturnFirstOdd(){
	var penult = x[x.length-2];
	for(i=0; i<x.length; i++){
		if(x[i]%2 !== 0){
			var FirstOdd = x[i];
				break;
		}	
	}
	console.log(penult);
	return FirstOdd;
}
x = [1,7,5,6,50];
printPenultimateReturnFirstOdd(x);

function doubleVision(){
	nuarr = [];
	for(i=0; i<x.length; i++){
		nuarr.push(x[i]*2);
	}
	return nuarr;
}
x = [1,2,3]
doubleVision(x);

function countPos(){
	var count = 0;
	for (i=0; i<x.length; i++){
		if(x[i]>0){
			count++;
		}
	}
	x[x.length-1] = count;
	return x;
}
x = [-1,1,1,1]
countPos(x);

function evensAndOdds(){
	var oddCount = 0;
	var evenCount = 0;
	for(i=0; i<x.length; i++){
		if(x[i]%2 !==0){
			oddCount++;
		}else(oddCount = 0);
		if(x[i]%2 ===0){
			evenCount++;
		}else(evenCount = 0);
		if(oddCount%3 ===0){
			console.log("That's Odd!");
		}
		if(evenCount%3 ===0){
			console.log("Even more so!");
		}
	}
}
x = [1,2,3,4,1,1,1,2,2,2]
evensAndOdds(x);