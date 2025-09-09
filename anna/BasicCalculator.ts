// Create a Calculator class
// Add 3 variables (numbers for calculation)
// Add 2 methods (add and subtract)

class Calculator{
    number1:number= 10
    number2: number = 20
    number3: number = 30

    add():void{
        console.log("sum of the numbers:", this.number1+this.number2+this.number3)
    }
    subtract():void{
        console.log("number substracted:", this.number1-this.number2-this.number3)
    }
    multiply(): void{
        console.log("numbers multiplied:",this.number1*this.number2*this.number3)
    }

}

let calcOutcome = new Calculator

calcOutcome.add()
calcOutcome.subtract()
calcOutcome.multiply()



