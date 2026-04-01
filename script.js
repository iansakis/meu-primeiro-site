const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const result = eval(display.value);
    
    addToHistory(display.value + " = " + result);

    display.value = result;
  } catch {
    display.value = "Erro";
  }
}

function addToHistory(operation) {
  const li = document.createElement("li");
  li.textContent = operation;
  historyList.prepend(li);
}