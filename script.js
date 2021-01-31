//plus btn-1
const increaseButtonFirstClass = document.getElementById("plus-btn1");
const increaseBtnEconomy = document.getElementById("plus-btn2");
//minus btn-2
const decreaseBtnFirstClass = document.getElementById("minus-btn1");
const decreaseBtnEconomy = document.getElementById("minus-btn2");

//default
document.getElementById("sub-total").innerText = "";
document.getElementById("tex").innerText = "";
document.getElementById("total").innerText = "";

//tickets price
const firstClassTicket = 150;
const economyTicket = 100;

increaseButtonFirstClass.addEventListener("click", () => {
  handleTicket("first-class-input", true, firstClassTicket);
});

increaseBtnEconomy.addEventListener("click", () => {
  handleTicket("economy-input", true, economyTicket);
});

decreaseBtnFirstClass.addEventListener("click", () => {
  handleTicket("first-class-input", false, firstClassTicket);
});

decreaseBtnEconomy.addEventListener("click", () => {
  handleTicket("economy-input", false, economyTicket);
});

//handle ticket function
function handleTicket(inputId, isIncrease) {
  const InputValue = document.getElementById(inputId).value;
  const inputNumber = parseFloat(InputValue);
  let newInput = inputNumber;
  if (isIncrease == true) {
    newInput = inputNumber + 1;
  } else if (isIncrease == false && newInput > 0) {
    newInput = inputNumber - 1;
  }
  document.getElementById(inputId).value = newInput;

  calculate();
}

//calcute function
function calculate() {
  const firstClassInputValue = document.getElementById("first-class-input")
    .value;
  const econommyInputValue = document.getElementById("economy-input").value;

  const subtotal =
    firstClassInputValue * firstClassTicket +
    econommyInputValue * economyTicket;
  document.getElementById("sub-total").innerText = subtotal;

  const tex = subtotal * 0.1;
  document.getElementById("tex").innerText = tex;

  total = subtotal + tex;
  document.getElementById("total").innerText = total;
}

//bokking function
const bookingBtn = document.getElementById("booking-btn");
bookingBtn.addEventListener("click", () => {
  const allSection = document.querySelector(".all-section");
  allSection.style.display = "none";

  const footer = document.querySelector("footer");
  footer.style.display = "block";

  const empty = document.getElementById("empty");
  empty.append(
    `you buy ${
      document.getElementById("first-class-input").value
    } first class tickets and ${
      document.getElementById("economy-input").value
    } economy ticket from Bangladesh airlines`
  );
});
