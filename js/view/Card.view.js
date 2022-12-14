export class CardView{
    constructor(containerForm, containerFrontCard, containerBackCard){
        this.form = containerForm
        this.frontcard = containerFrontCard
        this.backcard = containerBackCard
    }

    renderCardholderName(name){
        const cardholder = this.frontcard.querySelector("#cardholder")

        if(!name) return cardholder.textContent = "cardholder"

        cardholder.textContent = name
    }

    renderCardholderNumber(number){
        const cardnumber = this.frontcard.querySelector("#card-number")
        const str = this.formatingCardNumber(number)
        console.log(str)
        cardnumber.textContent = str
    }
    
    renderCardDate(date){
        this.frontcard.querySelector("#exp-date").textContent = date
    }

    renderCardCvc(cvc){
        
        const cardVerif = this.backcard.querySelector("#card-verif")

        if(!cvc) return cardVerif.textContent = "000"

        cardVerif.textContent = cvc
    }

    renderError(message, errorInput){
        console.log(message, errorInput)
        const error = this.form.querySelector(`#${errorInput}`)
        const input = this.form.querySelector(`[error-data="${errorInput}"]`)
        error.classList.add("active")
        error.textContent = message
        input.classList.add("error")
        input.blur()
    }

    renderOutError(input){
        input.classList.remove("error")
        document.querySelector(`#${input.getAttribute("error-data")}`).classList.remove("active")
        input.value = ""
    }

    formatingCardNumber(number){
        while(number.length < 16){
            number = number + 0
        }
        let firstStr = number.slice(0, 4)
        let secondStr = number.slice(4, 8)
        let thirdStr = number.slice(8, 12)
        let forthStr = number.slice(12, 16)

        return firstStr + " " + secondStr + " " + thirdStr +  " " + forthStr
    }
}