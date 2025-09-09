class Validator{
    minPasswordLength: number = 8
    maxPasswordLength: number = 20
    necessaryCharacters: string = "!"

    validatePass():void{
        console.log("password is validated:")
    }
}

let checkedPassword= new Validator

console.log("I need to validate ")
checkedPassword.validatePass()