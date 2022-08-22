export class CardController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    namingCardholder(name){
        try{
            this.service.namingCardholder(name)
            this.view.renderCardholderName(this.service.card.name)
            
        }catch(e){
            this.view.renderError(e.message, "error-name")
        }
    }

    numberingCard(number){
        try {
            this.service.numberingCard(number)
            this.view.renderCardholderNumber(this.service.card.number)
        } catch (e) {
            this.view.renderError(e.message, "error-number")
        }
    }

    informExpDateMM(date){
        try{
            this.service.informExpDateMM(date)
            this.view.renderCardDate(this.service.card.date)
        } catch(e){
            this.view.renderError(e.message, "error-date")
        }
    }

    informExpDateYY(date){
        try{
            this.service.informExpDateYY(date)
            this.view.renderCardDate(this.service.card.date)
        } catch(e){
            this.view.renderError(e.message, "error-date")
        }
    }

    informCardVerif(cvc){
        try{
            this.service.informCardVerif(cvc)
            this.view.renderCardCvc(this.service.card.cvc)
        } catch(e){
            this.view.renderError(e.message, "error-verif")
        }
    }

    renderOutError(input){
        console.log(input)
        
        if(input === this.view.form.querySelector("#input-cardholder")) this.view.renderCardholderName("cardholder")

        if(input === this.view.form.querySelector("#input-card-number")) this.view.renderCardholderNumber("0000000000000000")

        if(input === this.view.form.querySelector("#exp-date-MM")) this.view.renderCardDate("MM/YY")

        if(input === this.view.form.querySelector("#exp-date-MM")) this.view.renderCardDate("MM/YY")

        if(input === this.view.form.querySelector("#input-card-verif")) this.view.renderCardCvc("000")

        this.view.renderOutError(input)
    }

    submit(){
        const inputs = [...this.view.form.querySelectorAll("input")]
        try{
            this.service.submit(inputs)
        } catch(e) {
            this.view.renderError(e.message, e.cause)
        }
    }
}