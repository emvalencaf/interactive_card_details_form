//Módulos
import { CardController } from "./controller/Card.controller.js"
import { CardService } from "./service/Card.service.js"
import { CardView } from "./view/Card.view.js"

//Elementos DOM do formulário
const form = document.querySelector("form")
const inputCardHolderName = form.querySelector("#input-cardholder")
const inputCardNumber = form.querySelector("#input-card-number")
const inputCardExpDateMM = form.querySelector("#exp-date-MM")
const inputCardExpDateYY = form.querySelector("#exp-date-YY")
const inputCardVerif = form.querySelector("#input-card-verif")
//Elementos DOM do cartão
const frontcard = document.querySelector(".card-container")
const backcard = document.querySelector(".card-container-back")
const cardHolderName = document.querySelector("#cardholder")
const cardExpDate = document.querySelector("#exp-date")
const cardNumber = document.querySelector("#card-number")
const cardVerif = document.querySelector("#card-verif")

//instância das classes
const cardView = new CardView(form, frontcard, backcard)

const cardService = new CardService()
const cardController = new CardController(cardView, cardService)
console.log(cardController)

form.addEventListener('input', (evt) =>{
    evt.preventDefault()
    console.log(evt.target.value)

    if(evt.target === inputCardHolderName) return cardController.namingCardholder(evt.target.value)

    if(evt.target === inputCardNumber) return cardController.numberingCard(evt.target.value)

    if(evt.target === inputCardExpDateMM) return cardController.informExpDateMM(evt.target.value)

    if(evt.target === inputCardExpDateYY && evt.target.value.length == 2) return cardController.informExpDateYY(evt.target.value)

    if(evt.target === inputCardVerif) return cardController.informCardVerif(evt.target.value)

})

form.addEventListener('focusin', (evt) =>{
    console.log(evt.target)
    if(evt.target.nodeName === "INPUT" && evt.target.classList.contains("error")) return cardController.renderOutError(evt.target)
})

form.addEventListener('submit', (evt) =>{
    evt.preventDefault()

    cardController.submit()
})