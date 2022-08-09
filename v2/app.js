const inputForm = document.querySelector("#inputForm");
let inputTitle;
let inputFlavour;
let inputText;
let inputScore;
const tabakArray = [
  [["Black Nana"], ["Traube-Minze, süß mit ordentlicher Frische"], ["Nameless"], ["85"]],
  [["African Queen"], ["Beeren-Mix"], ["O's Tobacco "], ["88"]],
  [["Zitrone-Minze"], ["Zitrone-Minze"], ["Fog Your Life"], ["80"]],
  [["Saurer Apfel"], ["Apfel-Minze"], ["Fog Your Life"], ["75"]],
  [["Blut gegen Blut"], ["Zitrus und Drachenfrucht"], ["Al Massiva"], ["85"]],
  [["Handgemacht & Illegal"], ["Ananas - Kiwi, schmeckt wie Birne. Geht immer!"], ["Al Massiva"], ["90"]],
];
let newTabak;
let object;
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  inputTitle = e.target[1].value;
  inputFlavour = e.target[2].value;
  inputText = e.target[0].value;
  inputScore = e.target[3].value;
  if (
    inputTitle !== "" &&
    inputScore !== "" &&
    inputText !== "" &&
    inputFlavour !== "" &&
    inputScore >= 0 &&
    inputScore < 100
  ) {
    let newTabak = [[`${inputTitle}`], [`${inputFlavour}`], [`${inputText}`], [`${inputScore}`]];
    tabakArray.push(newTabak);

    let card = document.createElement("tr");
    let row = document.createElement("tr");
    let cardTitle = document.createElement("td");
    let cardFlavour = document.createElement("td");
    let cardText = document.createElement("td");
    let cardScore = document.createElement("td");
    let cardContainer = document.querySelector(".cardContainer");
    cardTitle.classList.add("coltitle");
    cardFlavour.classList.add("colflavour");
    cardText.classList.add("coltext");
    cardScore.classList.add("colscore");
    cardText.innerText = inputText;
    cardTitle.innerText = inputTitle;
    cardFlavour.innerText = inputFlavour;
    cardScore.innerText = `${inputScore / 10}`;
    card.append(cardText, cardTitle, cardFlavour, cardScore);
    cardContainer.append(card);
    reset();
  } else {
    alert("Bitte alle Felder richtig ausfüllen!");
  }
});

function updateSite() {
  // document.querySelector(".cardContainer").innerHTML =
  //   "<tr><th>Marke</th><th>Name</th><th>Geschmack</th><th>Score</th></tr>";

  for (let i = 0; i < tabakArray.length; i++) {
    let card = document.createElement("tr");
    let row = document.createElement("tr");
    let cardTitle = document.createElement("td");
    let cardFlavour = document.createElement("td");
    let cardText = document.createElement("td");
    let cardScore = document.createElement("td");
    let cardContainer = document.querySelector(".cardContainer");
    cardTitle.classList.add("coltitle");
    cardFlavour.classList.add("colflavour");
    cardText.classList.add("coltext");
    cardScore.classList.add("colscore");
    cardTitle.innerText = tabakArray[i][0];
    cardFlavour.innerText = tabakArray[i][1];
    cardText.innerText = tabakArray[i][2];
    cardScore.innerText = `${tabakArray[i][3] / 10}`;
    card.append(cardText, cardTitle, cardFlavour, cardScore);
    cardContainer.append(card);
  }
}

function reset() {
  document.querySelectorAll("input").forEach((element) => {
    element.value = "";
  });
}

updateSite();

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) =>
  ((v1, v2) => (v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)))(
    getCellValue(asc ? a : b, idx),
    getCellValue(asc ? b : a, idx)
  );

// do the work...
document.querySelectorAll("th").forEach((th) =>
  th.addEventListener("click", () => {
    const table = th.closest("table");
    Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
      .sort(comparer(Array.from(th.parentNode.children).indexOf(th), (this.asc = !this.asc)))
      .forEach((tr) => table.appendChild(tr));
  })
);
