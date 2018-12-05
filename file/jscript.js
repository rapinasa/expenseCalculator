

	var todoList = [];
	document.getElementByClassName("button1").onclick = function(){
		var sum = document.getElementById("total").innerHTML;
		var temp = {};
		temp.price = sum;
		var i = todoList.length;
		todoList[i] = temp;
		console.log(todoList);
		Calculator();
		localStorage.setItem("price", JSON.stringify(todoList));
	};


function Calculator() {
var a = document.getElementById("moneyVegetable1").value;
var b = document.getElementById("moneyVegetable2").value;
var c = document.getElementById("moneyVegetable3").value;
var d = document.getElementById("moneyDrinks1").value;
var e = document.getElementById("moneyDrinks2").value;
var f = document.getElementById("moneyDrinks3").value;
var g = document.getElementById("moneyCompayments1").value;
var h = document.getElementById("moneyCompayments2").value;
var j = document.getElementById("moneyCompayments3").value;
var k = document.getElementById("moneyCars1").value;
var l = document.getElementById("moneyCars2").value;
var m = document.getElementById("moneyCars3").value;
var z = Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f) + Number(g) + Number(h) + Number(j) + Number(k) + Number(l) + Number(m);
    document.getElementById("total").innerHTML=z;
};



    /*localStorage.setItem("keys", z);
var localValue = localStorage.getItem("keys");
document.getElementById("total").innerHTML = localValue;*/
