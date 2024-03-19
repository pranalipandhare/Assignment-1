let currentPage = 1;
const totalPages = 3;

function nextPage() {
  if (currentPage < totalPages) {
    document.querySelector(".page.active").classList.remove("active");
    document.querySelector(`.page${++currentPage}`).classList.add("active");
  }
}

function prevPage() {
  if (currentPage > 1) {
    document.querySelector(".page.active").classList.remove("active");
    document.querySelector(`.page${--currentPage}`).classList.add("active");
  }
}

function checkInputs() {
  let filledInputs = 0;

  const text1 = document.getElementById("text1").value.trim();
  const text2 = document.getElementById("text2").value.trim();
  const select1 = document.getElementById("select1").value.trim();
  const select2 = document.getElementById("select2").value.trim();
  const radio = document.querySelector('input[name="radio"]:checked');

  if (text1.length >= 3) filledInputs++;
  if (text2.length >= 3) filledInputs++;
  if (select1 !== "") filledInputs++;
  if (select2 !== "") filledInputs++;
  if (radio) filledInputs++;

  const progress = (filledInputs / 5) * 100;
  document.getElementById("progress").style.width = progress + "%";
}

checkInputs(); // Initial check
