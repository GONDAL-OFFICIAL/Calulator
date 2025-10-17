let lastResult = 0;

function addNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let sum = Number(n1) + Number(n2);
  lastResult = sum;

  document.getElementById("result").innerText = "The sum is: " + sum;

  document.getElementById("continueBtn").style.display = "inline-block";
}

function subNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let sub = Number(n1) - Number(n2);
  lastResult = sub;

  document.getElementById("result").innerText = "The difference is: " + sub;

  document.getElementById("continueBtn").style.display = "inline-block";
}

function mulNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let mul = Number(n1) * Number(n2);
  lastResult = mul;

  document.getElementById("result").innerText = "The product is: " + mul;

  document.getElementById("continueBtn").style.display = "inline-block";
}

function divNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  while (Number(n2) === 0) {
    alert("Unable to divide by zero!");
    n2 = prompt("Enter your second number here again");
  }

  let div = Number(n1) / Number(n2);
  lastResult = div;

  document.getElementById("result").innerText = "The quotient is: " + div;

  document.getElementById("continueBtn").style.display = "inline-block";
}

function povNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let pov = Number(n1) ** Number(n2);
  lastResult = pov;

  document.getElementById("result").innerText = "The power of " + Number(n1) + " and " + Number(n2) + " is: " + pov;

  document.getElementById("continueBtn").style.display = "inline-block";
}

function rootNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let root = Number(n1) ** (1 / Number(n2));
  lastResult = root;

  document.getElementById("result").innerText = "The root of " + Number(n1) + " and " + Number(n2) + " is: " + root;

  document.getElementById("continueBtn").style.display = "inline-block";
}

function modulusNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let modulus = Number(n1) % Number(n2) 
  lastResult = modulus;

  if (modulus == 0) {
    document.getElementById("result").innerText = Number(n1) + " is multiple of " + Number(n2);
  } else {
    document.getElementById("result").innerText = Number(n1) + " is not multiple of " + Number(n2);
  }

}

function avgNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let avg = (Number(n1) + Number(n2)) / 2;
  lastResult = avg;

  document.getElementById("result").innerText = "The average is: " + avg;

  document.getElementById("continueBtn").style.display = "inline-block";
}

function percentageNumbers() {
  let n1 = document.getElementById("num1").value;
  let n2 = document.getElementById("num2").value;

  let perc = (Number(n1) / Number(n2)) * 100;
  lastResult = perc;

  document.getElementById("result").innerText = "The percentage of " + Number(n1) + " out of " + Number(n2) + " is: " + perc + "%";

  document.getElementById("continueBtn").style.display = "inline-block";
}

function continueCalc() {
  document.getElementById("num1").value = lastResult;
  document.getElementById("num2").value = "";

  document.getElementById("result").innerText = "";
  document.getElementById("continueBtn").style.display = "none";
}
