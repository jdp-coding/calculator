function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result = 0;

  // if (isNaN(num1)) alert("Input Error!!");
  // if (isNaN(num2)) alert("Input Error!!");

  if (isNaN(num1) || isNaN(num2)) alert("Input Error!!");

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        alert("Error");
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation!";
  }

  document.getElementById("result").textContent = "Result : " + result;
}
