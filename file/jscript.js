
	var myArr = [];
function myFunction(){
  var a = document.getElementById("money1").value;

myArr.push(parseInt(a));

var z = "";
for (i = 0; i < myArr.length;i++){
z = z + myArr[i]+"<br/>";
}
  saveArr();
}
function getSum(total, num){
  return total + num;
  saveArr();
}
function Counting(item){
  document.getElementById("total1").innerHTML = myArr.reduce(getSum);
}
function saveArr(){
var JSONReady = JSON.stringify(myArr);
localStorage.setItem("myKey", JSONReady);
}
function getArr(){
var JSONReady = localStorage.getItem("myKey");
myArr = JSON.parse(JSONReady);
}
getArr();
Counting();
