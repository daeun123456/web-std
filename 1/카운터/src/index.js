const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  onClick(number, increase);
};

decrease.onclick = () => {
  onClick(number, decrease);
};

function onClick(num, elem) {
  const current = parseInt(num.innerText, 10);
  num.innerText = current + parseInt(elem.innerText, 10);
}
