const addVerb = document.querySelector(".add-verb")
const addNoun = document.querySelector(".add-noun")
const addThird = document.querySelector(".add-third")
const generateWord = document.querySelector(".generate-word")

const verbInput = document.querySelector(".verb-input")
const nounInput = document.querySelector(".noun-input")
const thirdInput = document.querySelector(".third-input")
const wordInput = document.querySelector(".word-input")

const verbsListContainer = document.querySelector(".verbs-list-container")
const nounsListContainer = document.querySelector(".nouns-list-container")
const thirdsListContainer = document.querySelector(".thirds-list-container")

let verbs = ["porte", "lance", "casse", "roule", "gratte", "range", "allume", "pince", "tourne", "claque", "branle", "caresse", "épluche" ,"coupe", "sauce", "croque", "suce", "attrape", "déplie", "perce", "saute", "pique", "ouvre", "micro", "encule", "décapite", "anti"]

let nouns = ["cornet", "endive", "gobelet", "betterave", "canard", "saucisse", "roumain", "craquotte", "lampadaire", "ampoule", "nageoire", "kebab", "dindon", "dauphin", "autiste", "croquette", "barbiche", "bougnoule","pastèque", "fourchette", "croque-monsieur", "chouette", "croûte", "crouton", "sauterelle", "truite", "poutre", "silex", "cadavre", "ongle", "orteil", "flûte", "plume", "plumeau", "mitaine", "brochette", "grelot", "grumeau"]

let thirds = ["inversé", "de velours", "en mousse", "putréfié", "graduel", "espagnol", "exponentiel", "à la crème de marrons", "roumain", "finlandais", "dégressif", "de bicarbonate", "antioxydant", "antibactérien", "déconfit", "confit", "moldave", "miniature", "géant", "hypnotique", "des enfers", "garanti 2 jours", "garanti 1 an", "roulant", "hongrois", "irlandais", "écarlate", "explosif", "norvégien", "de gitan", "suedois", "portuguais", "belge", "alsaciens", "à corne", "en acier", "en bois", "en cuir", "multicolore"]

addVerb.addEventListener("click", () => {
  if (verbInput.value !== '') {
    verbs.push(verbInput.value)
    console.log(verbs)
  }
  verbInput.value = ""
  updateData()
})

addNoun.addEventListener("click", () => {
  if (nounInput.value !== '') {
    nouns.push(nounInput.value)
    console.log(nouns)
  }
  nounInput.value = ""
  updateData()
})

addThird.addEventListener("click", () => {
  if (thirdInput.value !== '') {
    thirds.push(thirdInput.value)
    console.log(thirds)
  }
  thirdInput.value = ""
  updateData()
})


verbInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addVerb.click()
  }
})

nounInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addNoun.click()
  }
})

thirdInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addThird.click()
  }
})


generateWord.addEventListener("click", generateName)

function generateName(){
  let randomVerb = Math.floor(Math.random() * verbs.length)
  let randomNoun = Math.floor(Math.random() * nouns.length)
  let randomThird = Math.floor(Math.random() * thirds.length)
   let generatedWord = ("un" + " " + verbs[randomVerb] + "-" + nouns[randomNoun] + " " + thirds[randomThird])
   wordInput.innerText = generatedWord}

// nounsListContainer.innerText = nouns
// thirdsListContainer.innerText = thirds



function updateData() {


  let verbTemplate = verbs.map(verb =>
    `<li>${verb}</li>`).join('\n');
    verbsListContainer.innerHTML = verbTemplate

  let nounTemplate = nouns.map(noun =>
    `<li>${noun}</li>`).join('\n');
    nounsListContainer.innerHTML = nounTemplate

  let thirdTemplate = thirds.map(third =>
    `<li>${third}</li>`).join('\n');
    thirdsListContainer.innerHTML = thirdTemplate


}

updateData()


