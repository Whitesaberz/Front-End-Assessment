const colorBtn = document.querySelector("#color");
const placeBtn = document.querySelector("#place");
const ritualBtn = document.querySelector("#ritual");
const learnBtn = document.querySelector("#learn");
const message = document.querySelector("#message");

const favColor = (evt) => {
  evt.preventDefault();
  message.textContent = "Royal Purple!";
  revealMessage();
};
const favPlace = (evt) => {
  evt.preventDefault();
  message.textContent = "Tokyo!";
  revealMessage();
};
const favRit = (evt) => {
  evt.preventDefault();
  message.textContent = "Decompressing with Taco Bell and a movie.";
  revealMessage();
};
const learnMore = (evt) => {
  evt.preventDefault();

  alert("Too bad!");
};

const revealMessage = () => {
  message.classList.remove("hide");
  setTimeout(() => message.id.add("hide"), 1000);
};

colorBtn.addEventListener("click", favColor);
placeBtn.addEventListener("click", favPlace);
ritualBtn.addEventListener("click", favRit);
learnBtn.addEventListener("click", learnMore);
