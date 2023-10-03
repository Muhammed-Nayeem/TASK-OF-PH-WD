//utility function for get input value:
function getInputValue(fieldId) {
  let inputField = document.getElementById(fieldId);
  let inputFieldValue = inputField.value;
  let value = parseFloat(inputFieldValue);
  return value;
}

//utility function for set element value:
function setElementValue(elementId, calculatedArea) {
  let element = document.getElementById(elementId);
  element.innerText = calculatedArea;
}

//utility function for calculation area data entry:
function calculationEntry(areaType, area) {
  let calculationArea = document.getElementById("calculation-entry");
  let count = calculationArea.childElementCount;
  let p = document.createElement("p");
  p.classList.add("flex", "items-center", "justify-between", "my-4");
  p.innerHTML = `
    <span>${count+1}. ${areaType}</span> <span>${area}cm<sup>2</sup></span> <button class="btn btn-primary btn-sm">Convert To m<sup>2</sup></button>
  `;
  calculationArea.appendChild(p);
}

//triangle area:
function calculationTriangleArea() {
  let base = getInputValue("triangle-base");
  let height = getInputValue("triangle-height");

  if (isNaN(base) || isNaN(height)) {
    alert("Provide valid number!");
    return;
  }

  let area = 0.5 * base * height;
  setElementValue("triangle-area", area);
  calculationEntry("Triangle", area);
}

//rectangle area:
function calculationRectangleArea() {
  let width = getInputValue("rectangle-width");
  let length = getInputValue("rectangle-length");

  if (isNaN(width) || isNaN(length)) {
    alert("Provide valid number!");
    return;
  }

  let area = width * length;
  setElementValue("rectangle-area", area);
  calculationEntry("Rectangle", area);
}

//parallelogram area:
function calculationParallelogramArea() {
  let base = getInputValue("parallelogram-base");
  let height = getInputValue("parallelogram-height");

  if (isNaN(base) || isNaN(height)) {
    alert("Provide valid number!");
    return;
  }

  let area = base * height;
  setElementValue("parallelogram-area", area);
  calculationEntry("Parallelogram", area);
}

//rhombus area:
function calculationRhombusArea() {
  let base = getInputValue("rhombus-d1");
  let height = getInputValue("rhombus-d2");

  if (isNaN(base) || isNaN(height)) {
    alert("Provide valid number!");
    return;
  }

  let area = 0.5 * base * height;
  setElementValue("rhombus-area", area);
  calculationEntry("Rhombus", area);
}

//pentagon area:
function calculationPentagonArea() {
  let base = getInputValue("pentagon-base");
  let height = getInputValue("pentagon-height");

  if (isNaN(base) || isNaN(height)) {
    alert("Provide valid number!");
    return;
  }

  let area = 0.5 * base * height;
  setElementValue("pentagon-area", area);
  calculationEntry("Pentagon", area);
}

//ellipse area:
function calculationEllipseArea() {
  let base = getInputValue("ellipse-base");
  let height = getInputValue("ellipse-height");

  if (isNaN(base) || isNaN(height)) {
    alert("Provide valid number!");
    return;
  }

  let area = (3.14 * base * height).toFixed(2);
  setElementValue("ellipse-area", area);
  calculationEntry("Ellipse", area);
}
