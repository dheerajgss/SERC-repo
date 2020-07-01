function print() {
    var datee = document.myForm.Date.value;
    var d = new Date(datee)
    document.getElementById("datePrint").innerHTML = d;
}

function para1() {
    document.getElementById("p1").style.color = "red";
}

function para2() {
    document.getElementById("p2").style.color = "blue"
}

function checkNum() {
    var num = document.myNum.number.value;
    try{
    if(num >= 10 & num <=100){
        document.getElementById("numP").innerHTML = "It is in the range";
    }
    else{
        document.getElementById("numP").innerHTML = "It is not in the range";
    }
    }
    catch(err){
        document.getElementById("numP".innerHTML) = err.message
    }
}

var fib = 10
var a = 0
var b = 1
var c = 0
var str = "" + a + " " + b
while(c <= fib){
    c = a + b
    a = b
    b = c
    str = str + " " + c
}
document.getElementById("p3").innerHTML = str

var text = document.getElementById("intro").innerHTML;
var arr = text.split(" ")
document.getElementById("demo").innerHTML = arr[4] +" "+ arr[6] +" "+ arr[9];