class Validator {
  
    minLength = 6;
    maxLength = 12;
    emailSymbol = "@";

    validateEmail(email: string): boolean { 
        if (email.includes("@")) {
            return true;
        } else { 
            return false;
        }
    }

    validatePassword(password: string): boolean {
        if (password.length >= 6 && password.length <= 12) {
            return true;
        } else {
            return false;
        }
    }

}
let theValidator = new Validator();
console.log("Email valid?", theValidator.validateEmail("alina@example.com")); // true
console.log("Email valid?", theValidator.validateEmail("alina-gmail.com"));      // false

console.log("Password valid?", theValidator.validatePassword("chicago")); // true
console.log("Password valid?", theValidator.validatePassword("chi"));        // false