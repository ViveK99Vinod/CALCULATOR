function display(num) {
    output.value += num;
    
}

function clearAll() {
    output.value="";
    
}

function evaluateExp() {
    output.value=eval(output.value);
    
}
function removeLast() {
    currentExp=output.value;
    output.value=currentExp.slice(0,-1)
    
}

  function squareRoot() {
    var number = document.getElementById("output").value;
    var result = Math.sqrt(number);
    document.getElementById("output").value = result;
}

function Percentage() {
    var value = parseFloat(output.value);
    if (!isNaN(value)) {
      output.value = value / 100;
    } else {
      output.value = "Error";
}
}