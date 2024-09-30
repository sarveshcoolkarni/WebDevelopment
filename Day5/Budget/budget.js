function simple() {
    var amount = document.getElementById("amnt").value;
    var roi = document.getElementById("roi").value;
    var months = document.getElementById("months").value;
    var result = (amount*roi*months)/100;
    res.value = `Amount of Interest is:${result}`;

}
function compound() {
    var amount = document.getElementById("amnt").value;
    var roi = document.getElementById("roi").value;
    var months = document.getElementById("months").value;
    var result1 = amount * (Math.pow((1 + roi / 100), months));
    var result2 = result1 - amount;
    res.value = `Amount of Interest is:${result2}`;

}
function emi() {
    var amount = document.getElementById("amnt").value;
    var roi = document.getElementById("roi").value;
    var year = document.getElementById("months").value;
    var months = year*12;
    
    var emi = (amount * (roi/12) * Math.pow(1 + (roi/12), months)) / (Math.pow(1 + (roi/12), months) - 1);
    var result4= emi/months;
    
    document.getElementById("res").value = `Your Monthly EMI is : ₹${result4}`;
}

