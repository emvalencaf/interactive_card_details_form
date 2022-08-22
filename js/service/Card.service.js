export class CardService{
    constructor(){
        this.card = {
            name: "",
            number: "",
            date: "MM/YY",
            cvc: "000"
        }
    }

    namingCardholder(name){
        if(!name) return this.card.name = ""

        if(!isNaN(name)) throw new Error("cardholder name cannot be a number")

        this.card.name = name
    }

    numberingCard(number){

        if(!number) return this.card.number = ""

        if(isNaN(number)) throw new Error("card number must be a number")

        if(this.card.number.length >= 16) throw new Error("you cannot put card number with more than 16 digits")
        console.log(this.card.number.length)
        this.card.number = `${number}`
    }

    informExpDateMM(date){

        if(isNaN(date)) throw new Error("you must put a number")

        if(date > 12 || date < 1) throw new Error("you must put a number between 1-12")

        if(this.card.date.indexOf("YY") > -1) return this.card.date = `${date > 9? date : `0${date}`}/YY`
        
        const cardShortYear = this.card.date[3] + this.card.date[4] 
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear() + ""
        const currentShortYear = currentYear[2] + currentYear[3]
        const currentMonth = currentDate.getMonth + 1

        if(date < currentMonth && currentShortYear === cardShortYear) throw new Error("your credit card got expired")

        return this.card.date = `${date > 9? date : `0${date}`}/${cardShortYear}`

    }

    informExpDateYY(date){

        if(isNaN(date)) throw new Error("you must put a number")

        const currentDate = new Date()
        const currentYear = currentDate.getFullYear() + ""
        const currentShortYear = currentYear[2] + currentYear[3]
        console.log(currentShortYear)

        if(date < currentShortYear) throw new Error("your credit card got expired")

        if(this.card.date.indexOf("MM") > -1) return this.card.date = `MM/${date}`

        const currentMonth = currentDate.getMonth() + 1
        const cardMonth = this.card.date[0] + this.card.date[1]

        if(cardMonth < currentMonth && date === currentShortYear) throw new Error("your credit card got expired")
        
        return this.card.date = `${this.card.date[0]}${this.card.date[1]}/${date}`
    }

    informCardVerif(cvc){
        if(!cvc) return this.card.cvc = ""

        if(cvc.length > 3) throw new Error("cvc cannot be more than 3 digits")

        if(isNaN(cvc)) throw new Error("cvc must be a number")
        
        while(cvc.length < 3){
            cvc = cvc + "0"
        }

        this.card.cvc = cvc
    }

    submit(inputs){
        inputs.forEach(input => {
            
            if(input.getAttribute("error-data") === "error-name" && !isNaN(input.value)) throw new Error("cardholder name cannot be a number",{cause:"error-name"})

            if(input.getAttribute("error-data") === "error-verif" && isNaN(input.value)) throw new Error("cvc must be a number",{cause:"error-verif"})

            if(input.getAttribute("error-data") === "error-number" && isNaN(input.value)) throw new Error("card number must be a number",{cause:"error-number"})

            if(!input.value) throw new Error("cannot be blank",{cause: input.getAttribute("error-data")})

        })
    }
}