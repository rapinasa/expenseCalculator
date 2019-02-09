
    var myArr = [];
	var myArr1 = [];
	var myArr2 = [];
	var myArr3 = [];
	var myArr4 = [];

    var result1 = 0;
    var result2 = 0;
    var result3 = 0;
    var result4 = 0;

    var meals, drinks, compayments, transport;
 
function myFunction1(){
    myArr1.push(parseInt(meals));
    result1 = myArr1.reduce(function (sum, current){return sum + current});
    document.getElementById("mealsCart").innerHTML = result1;
}

function myFunction2(){
    myArr2.push(parseInt(drinks));
    result2 = myArr2.reduce(function (sum, current){return sum + current});
    document.getElementById("drinksCart").innerHTML = result2;
}

function myFunction3(){
	myArr3.push(parseInt(transport));
    result3 = myArr3.reduce(function (sum, current){return sum + current});
    document.getElementById("compaymentsCart").innerHTML = result3;
}

function myFunction4(){
    myArr4.push(parseInt(compayments));
    result4 = myArr4.reduce(function (sum, current){return sum + current});
    document.getElementById("transportCart").innerHTML = result4;
}

//collect total amount of money
function calculate1(){
    calc(result1);
    calculateTotal();
}
function calculate2(){
    calc(result2);
    calculateTotal();	
}
function calculate3(){
    calc(result3);
    calculateTotal();
}
function calculate4(){
    calc(result4);
    calculateTotal();
}
//adding sum of blocks
function calc(x){
    var x = myArr.push(parseInt(x));
    return x;
}

//compute total sum;
function calculateTotal(){
    var sum = myArr.reduce((a,b)=> {return a+b})
	document.getElementById("total").innerHTML = sum;
	save();
}
		

//saving to local storage
function save(){
var JSONReady = JSON.stringify(myArr);
localStorage.setItem("myKey", JSONReady);
}

//grab data from local storage
function getArr(){
var JSONReady = localStorage.getItem("myKey");
myArr = JSON.parse(JSONReady);
console.log(JSONReady);
}

getArr();
calculateTotal();

