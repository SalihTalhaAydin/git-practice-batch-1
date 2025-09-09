class Calculator {
    firstNumber: number = 10
    secondNumber: number = 5
    result: number = 0

    add(): void{
        console.log(this.result = this.firstNumber + this.secondNumber)
    }

    subtract(): void{
        console.log(this.result = this.firstNumber * this.secondNumber)
    }
}
 let myCalculator = new Calculator()
 myCalculator.add()
 myCalculator.subtract()
