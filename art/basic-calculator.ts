class Calculator {
    firstNumber = 10
    secondNumber = 5
    result = 0

    add(): void {
        this.result = 0
        this.result = this.firstNumber + this.secondNumber

        console.log('result = ' + this.result)
    }

    subtract(): void {
        this.result = 0
        this.result = this.firstNumber - this.secondNumber

        console.log(this.result)
    }
}

let calculator = new Calculator()

calculator.add()
calculator.subtract()