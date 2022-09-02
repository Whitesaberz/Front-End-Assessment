console.log("connected");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Submission received!");
}

const quack = (evt) => {
  evt.preventDefault();

  alert("Hey good lookin'!");
};

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let ducky = document.querySelector("#rubber-duck");

ducky.addEventListener("mouseover", quack);
