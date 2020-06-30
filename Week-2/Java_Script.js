//For basics task
document.write("JS is an object-oriented computer programming language commonly used to create interactive effects within web browsers.")

//For variable task
var a = 2;              
var b = 3;
console.log(a,b)       

//For data type task
var arr = [1,2,3,4,5];
arr[3] = String(arr[3]);
console.log(arr)

//For operators and function
function collect()
{
    var rowLen = document.getElementById("tableData").rows.length;
    var sum = 0
    for (var i = 1; i < rowLen; i++)
    {
        sum = sum + parseInt(document.getElementById("tableData").rows[i].cells.item(1).innerHTML , 10);
    }
    return sum / (i - 1)
}
document.write("<br><br>" + collect());
document.write("<br><br>")

//For Math functions
document.write("Using Math functions:" + "<br><br>");
document.write("Pow function: "+ Math.pow(2,3) + "<br>");
document.write("Square root: " + Math.sqrt(3) + "<br>");
document.write("Absolute Value of -4 is: " + Math.abs(-4) +"<br>");
var rand = (Math.random() * 10) + 1
document.write("Random number: "+ rand + "<br>");
document.write("Floor of that number: " + Math.floor(rand) + "<br>");
document.write("Ceil of that number: " + Math.ceil(rand) + "<br>");
document.write("Sin 90 degrees is: " + Math.sin(90 * Math.PI / 180));

document.write("<br><br>");
//For regex and Form validation

function validate() {
    var text = document.myform.fname.value;
    var r = /^[a-zA-Z]+$/g;
    var val = r.test(text);
    if(val == false)
    {
        alert("Not a correct name");
    }
    var num = document.myform.ph_number.value;
    var re = /^[0-9]+$/g;
    var vall = re.test(num);
    if(vall == false)
    {
        alert("Only numbers");
    }
    else{
        if(num.length != 10){
            alert("No enough numbers");
        }
    }
}

