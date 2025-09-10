class Calculator{
    firstNumber: number = 10
    secondNumber: number = 5
     result: number = 0
     
     addition(){
        let result = this.firstNumber + this.secondNumber
        console.log("Addition Result:", + result)
     }
     subtraction(){
        this.result = this.firstNumber - this.secondNumber;
        console.log("Subtraction Result:", this.result)
     }
}
const myCalculator = new Calculator()
myCalculator.addition()   
myCalculator.subtraction()