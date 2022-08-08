const inputForm = document.querySelector("#inputForm");
let inputTitle;
let inputFlavour;
let inputText;
let inputScore;
const tabakArray = [
  [["Nameless - Black Nana"], ["Traube-Minze"], ["Gute Traube-Minze, mit Shot Minz-Gehalt regulierbar."], ["85"]],
  [["O's Tobacco - African Queen"], ["Beeren-Mix"], ["Herber Beeren-Mix, geht immer. Klassiker!"], ["88"]],
  [
    ["Fog Your Life - Zitrone-Minze"],
    ["Zitrone-Minze"],
    ["Zum Selbstmischen mit Hookain Natural Base. Schmeckt frisch, kein Klostein-Feeling."],
    ["80"],
  ],
  [
    ["Fog Your Life - Saurer Apfel"],
    ["Apfel-Minze"],
    ["Zum Selbstmischen mit Hookain Natural Base. Schmeckt frisch."],
    ["75"],
  ],
  [
    ["Al Massiva - Blut gegen Blut"],
    ["Zitrus und Drachenfrucht"],
    ["Sehr lecker, auch wenn etwas undefinierbar. Ohne Minze."],
    ["85"],
  ],
  [
    ["Al Massiva - Handgemacht & Illegal"],
    ["Ananas - Kiwi"],
    ["Schmeckt nicht nach Ananas und Kiwi, eher nach Birne. Trotzdem sehr solide, geht immer."],
    ["90"],
  ],
];
let newTabak;
let object;
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  inputTitle = e.target[0].value;
  inputFlavour = e.target[1].value;
  inputText = e.target[2].value;
  inputScore = e.target[3].value;
  if (inputTitle !== "" && inputScore !== "" && inputText !== "" && inputFlavour !== "") {
    let newTabak = [[`${inputTitle}`], [`${inputFlavour}`], [`${inputText}`], [`${inputScore}`]];
    tabakArray.push(newTabak);
    reset();
    updateSite();
  } else {
    alert("Bitte alle Felder ausfüllen!");
  }
});

function updateSite() {
  document.querySelector(".cardContainer").innerHTML = "";
  for (let i = 0; i < tabakArray.length; i++) {
    let card = document.createElement("div");
    let cardTitle = document.createElement("h2");
    let cardFlavour = document.createElement("p");
    let cardText = document.createElement("p");
    let cardScore = document.createElement("p");
    let cardContainer = document.querySelector(".cardContainer");
    card.classList.add("card");
    cardTitle.classList.add("cardTitle");
    cardFlavour.classList.add("cardFlavour");
    cardText.classList.add("cardText");
    cardScore.classList.add("cardScore");
    cardTitle.innerText = tabakArray[i][0];
    cardFlavour.innerText = tabakArray[i][1];
    cardText.innerText = tabakArray[i][2];
    cardScore.innerText = `Score: ${tabakArray[i][3]}/100`;
    card.append(cardTitle, cardFlavour, cardText, cardScore);
    cardContainer.append(card);
  }
}

function reset() {
  document.querySelectorAll("input").forEach((element) => {
    element.value = "";
  });
}

function toggleNew() {
  document.querySelector(".toggleDiv").classList.toggle("dnone");
}
updateSite();
