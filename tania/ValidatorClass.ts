class Validator {
    minPasswordLength: number = 8;
    emailPattern: string = "@";
    isValid: boolean = false;

    validateEmail(email: string) {
        this.isValid = email.includes(this.emailPattern);
        console.log("Email is valid:", this.isValid);
    }

    validatePassword(password: string) {
        this.isValid = password.length >= this.minPasswordLength;
        console.log("Password is valid:", this.isValid);
    }
}

const validator = new Validator();
validator.validateEmail("user@example.com")
validator.validateEmail("userexample.com")


validator.validatePassword("mypassword")
validator.validatePassword("short")  