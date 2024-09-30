function calculateInterest() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value / 100;
    const time = document.getElementById("time").value;
    const interestType = document.getElementById("interest-type").value;
  
    let interest;
    if (interestType === "simple") {
      interest = (principal * rate * time);
    } else if (interestType === "compound") {
      interest = principal * (Math.pow(1 + rate, time) - 1);
    }
  
    const result = `The ${interestType} interest is: ₹${interest.toFixed(2)}`;
    document.getElementById("result").innerHTML = result;
  }