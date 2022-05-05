const addVerb = document.querySelector(".add-verb")
const addNoun = document.querySelector(".add-noun")
const addThird = document.querySelector(".add-third")
const generateWord = document.querySelector(".generate-word")

const verbInput = document.querySelector(".verb-input")
const nounInput = document.querySelector(".noun-input")
const thirdInput = document.querySelector(".third-input")
const wordInput = document.querySelector(".word-input")

let verbs = ["porte", "lance", "casse", "roule", "gratte", "range", "allume", "pince", "tourne", "claque", "branle", "caresse"]

let nouns = ["cornet", "andive", "gobelet", "betterave", "canard", "saucisse", "roumain", "craquotte", "lampadaire", "ampoule", "nageoire", "kebab", "dindon", "dauphin", "autiste", "croquette", "barbiche", "bougnoule"]

let thirds = ["roulant", "hongrois", "brakmarien", "irlandais", "écarlate", "explosif", "norvégien", "bontarien", "de gitan", "suedois", "portuguais", "belge", "alsaciens", "à corne", "en acier", "en bois", "en cuir", "multicolore"]

addVerb.addEventListener("click", () => {
  if (verbInput.value !== '') {
    verbs.push(verbInput.value)

    console.log(verbs)
  }
  verbInput.value = ""
})

addNoun.addEventListener("click", () => {
  if (nounInput.value !== '') {
    nouns.push(nounInput.value)
    nounInput.value = " "
    console.log(nouns)
  }
  nounInput.value = ""
})

addThird.addEventListener("click", () => {
  if (thirdInput.value !== '') {
    thirds.push(thirdInput.value)
    thirdInput.value = " "
    console.log(thirds)
  }
  thirdInput.value = ""
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
nounThird.addEventListener("keypress", (event) => {
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
