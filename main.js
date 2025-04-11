let bill = document.querySelector(".bill input");
let selectTip = document.querySelectorAll(".tips button");
let customTip = document.getElementById("custom");
let number = document.querySelector(".people-number input");
let tipAmount = document.getElementById("tip-amount");
let total = document.getElementById("total");
let resetBtn = document.querySelector(".reset button");
let t = 0;

bill.addEventListener("keyup", function () {
  if (number.value == "" || number.value == 0) {
    number.style.borderColor = "red";
  } else {
    number.style.borderColor = "transparent";
    CalculTotal = bill.value / number.value + t;
    total.innerText = `$${CalculTotal.toFixed(2)}`;
  }
  resetBtn.classList.remove("disactive-btn");
  resetBtn.classList.add("active-btn");
});

number.addEventListener("keyup", function () {
  if (number.value == "" || number.value == 0) {
    number.style.borderColor = "red";
  } else {
    number.style.borderColor = "transparent";
    CalculTotal = bill.value / number.value + t;
    total.innerText = `$${CalculTotal.toFixed(2)}`;
  }
  resetBtn.classList.remove("disactive-btn");
  resetBtn.classList.add("active-btn");
});

selectTip.forEach((ele) =>
  ele.addEventListener("click", function () {
    t = bill.value * ele.value;
    tipAmount.innerText = `$${t.toFixed(2)}`;
    CalculTotal = bill.value / number.value + t;
    if (isFinite(CalculTotal)) {
      total.innerText = `$${CalculTotal.toFixed(2)}`;
    } else {
      total.innerText = "$00.00";
    }
    for (let e of selectTip) {
      e.classList.remove("active-tip");
    }
    ele.classList.toggle("active-tip");
    resetBtn.classList.remove("disactive-btn");
    resetBtn.classList.add("active-btn");
    customTip.value = "";
  })
);

customTip.addEventListener("keyup", function () {
  let cus = customTip.value / 100;
  t = bill.value * cus;
  tipAmount.innerText = `$${t.toFixed(2)}`;
  CalculTotal = bill.value / number.value + t;
  total.innerText = `$${CalculTotal.toFixed(2)}`;
  resetBtn.classList.remove("disactive-btn");
  resetBtn.classList.add("active-btn");
  for (let e of selectTip) {
    e.classList.remove("active-tip");
  }
});

resetBtn.addEventListener("click", function () {
  location.reload();
});
