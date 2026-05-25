const QUESTIONS = [
  {
    text: "Hvor ofte spiser du bær (blåbær, jordbær, bringebær, solbær)?",
    options: [
      { text: "Nesten aldri", score: 0 },
      { text: "1–2 ganger i uken", score: 1 },
      { text: "3–5 ganger i uken", score: 2 },
      { text: "Daglig", score: 3 },
    ],
  },
  {
    text: "Bruker du olivenolje som din primære matolje?",
    options: [
      { text: "Nei, jeg bruker smør eller annen olje", score: 0 },
      { text: "Av og til", score: 1 },
      { text: "Ja, noen ganger i uken", score: 2 },
      { text: "Ja, nesten hver dag", score: 3 },
    ],
  },
  {
    text: "Hvor ofte spiser du mørk sjokolade (70% kakao eller mer)?",
    options: [
      { text: "Aldri", score: 0 },
      { text: "Sjelden (1–2 ganger i måneden)", score: 1 },
      { text: "Ukentlig", score: 2 },
      { text: "Daglig", score: 3 },
    ],
  },
  {
    text: "Drikker du grønn te, svart te eller kaffe uten sukker?",
    options: [
      { text: "Nei", score: 0 },
      { text: "Et par ganger i uken", score: 1 },
      { text: "Daglig, én kopp", score: 2 },
      { text: "Daglig, to kopper eller mer", score: 3 },
    ],
  },
  {
    text: "Spiser du nøtter (valnøtter, mandler, pekannøtter, hasselnøtter)?",
    options: [
      { text: "Sjelden eller aldri", score: 0 },
      { text: "1–2 ganger i uken", score: 1 },
      { text: "Mest daglig, men en liten mengde", score: 2 },
      { text: "En håndfull daglig", score: 3 },
    ],
  },
  {
    text: "Inneholder kostholdet ditt fisk rik på omega-3 (laks, makrell, sardiner) eller fiskeoljetilskudd?",
    options: [
      { text: "Aldri", score: 0 },
      { text: "1–2 ganger i måneden", score: 1 },
      { text: "1–2 ganger i uken", score: 2 },
      { text: "3+ ganger i uken eller daglig tilskudd", score: 3 },
    ],
  },
  {
    text: "Spiser du grønnsaker som løk, brokkoli, spinat eller rødkål?",
    options: [
      { text: "Nesten aldri", score: 0 },
      { text: "Et par ganger i uken", score: 1 },
      { text: "En porsjon daglig", score: 2 },
      { text: "To eller flere porsjoner daglig", score: 3 },
    ],
  },
  {
    text: "Hva er ditt typiske inntak av rødvin eller druebaserte produkter?",
    options: [
      { text: "Ingen / drikker ikke alkohol", score: 1 },
      { text: "Svært sjelden", score: 1 },
      { text: "Et glass rødvin noen ganger i uken", score: 2 },
      { text: "Daglig, ett glass", score: 3 },
    ],
  },
  {
    text: "Spiser du belgvekster (linser, kikerter, bønner) som en del av kostholdet ditt?",
    options: [
      { text: "Sjelden eller aldri", score: 0 },
      { text: "1–2 ganger i måneden", score: 1 },
      { text: "Ukentlig", score: 2 },
      { text: "Nesten daglig", score: 3 },
    ],
  },
  {
    text: "Hvor mye prosessert mat, hurtigmat eller pakket snacks spiser du?",
    options: [
      {
        text: "Nesten daglig – det er store deler av kostholdet mitt",
        score: 0,
      },
      { text: "Et par ganger i uken", score: 1 },
      { text: "Sjelden, kanskje en gang i uken", score: 2 },
      { text: "Svært sjelden, jeg fokuserer på hel mat", score: 3 },
    ],
  },
];

const PRODUCTS = {
  nuts: {
    icon: "🥜",
    name: "Fons Nøtter",
    link: "https://fons.no/products/notteblanding-1-kg-abonnement-copy",
    tip: "Rike på polyfenoler, sunt fett og antioksidanter. En håndfull om dagen er alt som trengs.",
  },

  fishoil: {
    icon: "🐟",
    name: "Fons Omega",
    link: "https://fons.no/products/fons-omega",
    tip: "Høydose omega-3 som samvirker med polyfenoler og styrker hjerte, hjerne og betennelsesdempende effekter.",
  },

  oliveoil: {
    icon: "🫒",
    name: "Fons Extra Virgin Olivenolje",
    link: "https://fons.no/products/olje",
    tip: "Kaldpresset og full av oleocanthal og hydroxytyrosol – to av de kraftigste plantebaserte polyfenolene.",
  },

  chocolate: {
    icon: "🍫",
    name: "Fons Mørk Sjokolade 80%",
    link: "https://fons.no/products/sjokolade",
    tip: "Mørk sjokolade er en smakfull kilde til polyfenoler, antioksidanter og naturlige plantestoffer som støtter en aktiv livsstil.",
  },
};

const RESULTS = [
  {
    min: 0,
    max: 10,
    title: "Polyfenolunderskudd",
    desc: "Kostholdet ditt inneholder foreløpig svært lite polyfenoler. Gode nyheter: det er enkelt å endre på dette! Selv små justeringer kan gi stor effekt for helse og energi.",
    products: ["oliveoil", "chocolate"],
  },
  {
    min: 11,
    max: 19,
    title: "På vei i riktig retning",
    desc: "Du har noen polyfenolrike vaner, men det er fremdeles rom for forbedring. Med ett eller to nye grep kan du løfte kostholdet ditt betydelig.",
    products: ["oliveoil", "nuts"],
  },
  {
    min: 20,
    max: 25,
    title: "Polyfenolbevisst",
    desc: "Veldig bra! Du tar bevisste valg og kostholdet ditt er rikt på antioksidanter og plantebaserte næringsstoffer. En liten ekstra boost kan ta deg til neste nivå.",
    products: ["fishoil", "chocolate"],
  },
  {
    min: 26,
    max: 30,
    title: "Polyfenolmester",
    desc: "Imponerende! Kostholdet ditt er allerede svært rikt på polyfenoler. Du lever etter prinsippene som forskning viser gir lang og god helse. Hold deg til det!",
    products: ["nuts", "fishoil"],
  },
];

let current = 0;
let answers = [];
let totalScore = 0;

// function for screen selection

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// function to start quiz
function startQuiz() {
  current = 0;
  answers = [];
  renderQuestion();
  showScreen("screen-quiz");
}

// function to restart quiz
function restartQuiz() {
  showScreen("screen-introduction");
}

// function to render current question and answer options
function renderQuestion() {
  const currentQuestion = QUESTIONS[current];

  document.getElementById("q-number").textContent = `Spørsmål ${current + 1}`;
  const textEl = document.getElementById("q-text");
  textEl.textContent = currentQuestion.text;
  textEl.parentElement.classList.remove("question-transition");
  void textEl.parentElement.offsetWidth;
  textEl.parentElement.classList.add("question-transition");

  // Progress
  const quizProgressPercent = ((current + 1) / QUESTIONS.length) * 100;
  document.getElementById("progress-fill").style.width =
    quizProgressPercent + "%";
  document.getElementById("progress-label").textContent =
    `${current + 1} / ${QUESTIONS.length}`;

  // Answer options
  const container = document.getElementById("options-container");
  container.innerHTML = "";
  const labels = ["A", "B", "C", "D"];

  currentQuestion.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (answers[current] === i ? " selected" : "");
    btn.innerHTML = `<span class="option-circle">${labels[i]}</span>${opt.text}`;
    btn.addEventListener("click", () => selectOption(i));
    container.appendChild(btn);
  });

  // Navigation buttons
  document.getElementById("btn-prev").disabled = current === 0;
  document.getElementById("btn-next").disabled = answers[current] == null;
  document.getElementById("btn-next").textContent =
    current === QUESTIONS.length - 1 ? "Se resultat →" : "Neste →";
}

function selectOption(index) {
  answers[current] = index;
  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    btn.classList.toggle("selected", i === index);
  });
  document.getElementById("btn-next").disabled = false;
}

function nextQuestion() {
  if (answers[current] == null) return;
  if (current < QUESTIONS.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

function showResult() {
  totalScore = answers.reduce((sum, ans, i) => {
    if (ans == null) return sum;
    return sum + QUESTIONS[i].options[ans].score;
  }, 0);

  const result =
    RESULTS.find((r) => totalScore >= r.min && totalScore <= r.max) ||
    RESULTS[0];

  // Score display
  document.getElementById("score-display").textContent = totalScore;
  document.getElementById("result-title").textContent = result.title;
  document.getElementById("result-desc").textContent = result.desc;

  // Animate ring
  const circumference = 314;
  // calculate amount of ring to fill
  const offset = circumference - (totalScore / 30) * circumference;

  //after 0.3 seconds the ring is filled according to the score
  setTimeout(() => {
    document.getElementById("ring-foreground").style.strokeDashoffset = offset;
    // Color by score
    const ring = document.getElementById("ring-foreground");
    if (totalScore <= 10) ring.style.stroke = "#991e3d";
    else if (totalScore <= 19) ring.style.stroke = "#d4a017";
    else ring.style.stroke = "#3fa538";
  }, 300);

  // Products
  const grid = document.getElementById("products-grid");
  grid.innerHTML = "";
  result.products.forEach((key) => {
    const productRecommendation = PRODUCTS[key];
    const el = document.createElement("div");
    el.className = "product-item";
    el.innerHTML = `
      <div class="product-icon">${productRecommendation.icon}</div>
      <div class="product-info">
        <div class="product-name">${productRecommendation.name}</div>
        <div class="product-tip">${productRecommendation.tip}</div>
        <a href="${productRecommendation.link}" target="_blank" class="btn-fons btn-primary-fons mt-3">
          Kjøp nå
        </a>
      </div>
    `;
    grid.appendChild(el);
  });

  // Reset email form
  document.getElementById("email-input").value = "";
  document.getElementById("email-form-row").classList.remove("hidden");
  document.getElementById("email-confirm").classList.add("hidden");

  showScreen("screen-result");
}

// email submission
function submitEmail() {
  const input = document.getElementById("email-input");
  const email = input.value.trim();

  // email validation
  if (!email || !email.includes("@") || !email.includes(".")) {
    input.style.borderColor = "#991e3d";
    input.placeholder = "Skriv inn en gyldig e-postadresse";
    setTimeout(() => {
      input.style.borderColor = "";
      input.placeholder = "din@epost.no";
    }, 2500);
    return;
  }

  // email sending simulation

  console.log(`Email to send: ${email}, Score: ${totalScore}`);

  document.getElementById("email-form-row").classList.add("hidden");
  document.getElementById("email-confirm").classList.remove("hidden");
}

// keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("screen-quiz").classList.contains("active"))
    return;
  if (["1", "2", "3", "4"].includes(e.key)) {
    const idx = parseInt(e.key) - 1;
    if (idx < QUESTIONS[current].options.length) selectOption(idx);
  }
  if (e.key === "Enter" && answers[current] != null) nextQuestion();
  if (e.key === "ArrowLeft" && current > 0) prevQuestion();
});
