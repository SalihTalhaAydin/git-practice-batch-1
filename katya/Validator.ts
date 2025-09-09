class Validator{
    minPasswordLength: number = 8
    emailPattern: string = "@"
    isValid: boolean = false

    validateEmail(email: string) : boolean{
        if(email.includes(this.emailPattern)){
            this.isValid = true
        }
        return this.isValid
    }

    validatePassword(password : string) : boolean{
        if(password.length >= this.minPasswordLength){
            this.isValid = true
        }
        return this.isValid
    }
}

let myValidator = new Validator()
console.log(myValidator.validateEmail('kate@qa.com'))
console.log(myValidator.validatePassword('Password1234!'))