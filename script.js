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

let rollCount = 0


let verbs = ["brule", "porte", "rince", "chatouille", "croque", "creuse", "nettoie", "essuie", "dompte", "ronge", "éponge", "découpe", "accélérateur à", "mixeur à", "épile", "démonte", "réacteur à", "distributeur à", "tire", "four à", "entrepot à", "écrase", "lèche", "fouette", "bocal à", "arrose", "bar à", "chevauche", "pain aux", "étire", "appareil à", "étouffe", "bol à", "lance", "casse", "roule", "gratte", "range", "allume", "pince", "tourne", "claque", "branle", "caresse", "épluche" ,"coupe", "sauce", "croque", "suce", "attrape", "déplie", "perce", "saute", "pique", "ouvre", "micro", "encule", "décapite", "robot-anti"]

let nouns = ["goudron", "papier", "tartine", "tetine", "brouette", "jambon", "truelle", "pelleteuse", "chaussette", "maracas", "polystyrène", "gimbarde", "tracteur", "crouton", "nouille", "poule", "biscotte", "cactus", "vache", "éponge", "lavabo", "légumes", "poussière", "dalmatiens", "câble HDMI", "pizza", "chocolat", "ratatouille", "patate douce", "pomme de terre", "patate", "verre d'eau", "carotte", "crêpe", "assiette", "porte-manteau", "saucisson", "oignon", "pancarte", "clou", "éolienne", "DVD", "tyrolienne", "pieuvre", "poulpe", "Macron", "crevette", "micro-ondes", "arrosoir", "grue", "têtons", "mine antipersonnelle", "tapis", "pépin", "anchois", "hérisson", "reblochon", "girafe", "dinosaure", "crapeau", "chapeau", "sourcils", "t-rex", "cornet", "endive", "gobelet", "betterave", "canard", "saucisse", "roumain", "craquotte", "lampadaire", "ampoule", "nageoire", "kebab", "dindon", "dauphin", "autiste", "croquette", "barbiche", "bougnoule","pastèque", "fourchette", "croque-monsieur", "chouette", "croûte", "crouton", "sauterelle", "truite", "poutre", "silex", "cadavre", "ongle", "orteil", "flûte", "plume", "plumeau", "mitaine", "brochette", "grelot", "grumeau"]

let thirds = ["austro-hongrois", "automatique", "en polistyrène", "rebondissant", "quantique", "multidimensionnel", "à particules", "télécommandé", "sans fil", `à 5 euros`, "renouvelable", "grossophobe", "des années 70", "des années 80", "des années 90", "des années 2000", "communiste", "anarchiste", "étanche", "bon marché", "wish", "premier prix", "Leader Price", "en osier", "fluorescent", "sous stéroides", "pliable", "pare-balles", "defectueux", "édition limité", "tétraplégique", "mourrant", "ménopausé", "d'electriciens", "spatial", "atomique", "inversé", "de velours", "en mousse", "putréfié", "graduel", "espagnol", "exponentiel", "à la crème de marrons", "roumain", "finlandais", "dégressif", "nazi", "de bicarbonate", "antioxydant", "antibactérien", "déconfit", "confit", "moldave", "miniature", "géant", "hypnotique", "des enfers", "garanti 2 jours", "garanti 1 an", "roulant", "hongrois", "irlandais", "écarlate", "explosif", "norvégien", "de gitan", "suedois", "portuguais", "belge", "alsaciens", "à corne", "en acier", "en bois", "en cuir", "multicolore"]



addVerb.addEventListener("click", () => {
  if (verbInput.value !== '') {
    verbs.push(verbInput.value.toLowerCase())
    console.log(verbs)
  }
  verbInput.value = ""
  updateData()
})

addNoun.addEventListener("click", () => {
  if (nounInput.value !== '') {
    nouns.push(nounInput.value.toLowerCase())
    console.log(nouns)
  }
  nounInput.value = ""
  updateData()
})

addThird.addEventListener("click", () => {
  if (thirdInput.value !== '') {
    thirds.push(thirdInput.value.toLowerCase())
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


document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateWord.click()
  }
})




generateWord.addEventListener("click", generateName)




function generateName(){
  let randomVerb = Math.floor(Math.random() * verbs.length)
  let randomNoun = Math.floor(Math.random() * nouns.length)
  let randomThird = Math.floor(Math.random() * thirds.length)
   let generatedWord = ("un" + " " + verbs[randomVerb] + "-" + nouns[randomNoun] + " " + thirds[randomThird])
   wordInput.classList.remove("word-input")
   void wordInput.offsetWidth
   wordInput.classList.add("word-input")
   wordInput.innerText = generatedWord
   rollCount++
  }




function updateData() {


  let verbTemplate = verbs.map(verb =>
    `<span class="flex-cross"><li>${verb}</li><i class="fa-solid fa-xmark verb-delete-cross delete-cross"></i></span>`).join('\n');
    verbsListContainer.innerHTML = verbTemplate

  let nounTemplate = nouns.map(noun =>
    `<span class="flex-cross"><li>${noun}</li><i class="fa-solid fa-xmark noun-delete-cross delete-cross"></i></span>`).join('\n');
    nounsListContainer.innerHTML = nounTemplate

  let thirdTemplate = thirds.map(third =>
    `<span class="flex-cross"><li>${third}</li><i class="fa-solid fa-xmark third-delete-cross delete-cross"></i></span>`).join('\n');
    thirdsListContainer.innerHTML = thirdTemplate

    const deleteCross = document.querySelectorAll(".delete-cross")


deleteCross.forEach(cross => {
  cross.addEventListener("click", (event) => {
    let target = event.target
    if (target.className.includes("verb-delete-cross") ) {
      let target = event.target
      let textToDelete = target.previousSibling.innerText
      let textIndex = verbs.indexOf(textToDelete)
      var result = confirm(`Supprimer le mot "${textToDelete}" de la liste ?`);
        if (result) {
          verbs.splice(textIndex, 1)
        }


    }
    else if (target.className.includes("noun-delete-cross") ) {
      let target = event.target
      let textToDelete = target.previousSibling.innerText
      let textIndex = nouns.indexOf(textToDelete)
      var result = confirm(`Supprimer le mot "${textToDelete}" de la liste ?`);
        if (result) {
          nouns.splice(textIndex, 1)
        }
    }
    else if (target.className.includes("third-delete-cross") ) {
      let target = event.target
      let textToDelete = target.previousSibling.innerText
      let textIndex = thirds.indexOf(textToDelete)
      var result = confirm(`Supprimer le mot "${textToDelete}" de la liste ?`);
        if (result) {
          thirds.splice(textIndex, 1)
        }
    }
    updateData()
  })
})

}

document.querySelector(".delete-all-words").addEventListener("click", deleteAllWords)

function deleteAllWords() {
  var result = confirm(`Supprimer tous les mots ?`);
  if (result) {
    verbs = []
    nouns = []
    thirds = []
    updateData()
  }
}

let saveIsDisabled = false

function createSave() {

  if (saveIsDisabled) {
    return;
  }

  const wordsData = {
    verbs: verbs,
    nouns: nouns,
    thirds: thirds,
    rollCount: rollCount
  }

  const wordsDataJson = JSON.stringify(wordsData);
  localStorage.setItem('words', wordsDataJson);
}

function getSave() {
  const wordsDataJson = localStorage.getItem("words")

  if (!wordsDataJson) {
    return;
  }

  const wordsData = JSON.parse(wordsDataJson)

  verbs = wordsData.verbs;
  nouns = wordsData.nouns;
  thirds = wordsData.thirds;
  rollCount = wordsData.rollCount;
}

function resetSave() {
  var result = confirm(`Remettre les mots par défaut ?`);
  if (result) {
    saveIsDisabled = true;
    localStorage.removeItem('words');
    window.location.reload();
  }

}

document.querySelector(".reset-save").addEventListener("click", resetSave)


generateName()
getSave();
setInterval(createSave, 1000);
updateData()
