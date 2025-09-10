// Purple Login Page - Anna
// File: purple-login-page.ts
// Branch: add-login-page
// Variables: emailField: string = "#email", passwordField: string = "#password", loginButton: string = ".login-btn"
// Methods: enterCredentials(email: string, password: string), clickLogin()


class PurpleLoginPage{
    emailField: string = "#email"
    passwordField: string = "#password"
    loginButton: string = ".login-btn"

    enterCredentials(email: string, password: string): void{
        console.log("Entering email",this.emailField)
        console.log("entering paqssword",this.passwordField)
    }
    clickLogin(): void {
        console.log('Clicking login button:',this.loginButton)
    }
}
    
    
let loginPage = new PurpleLoginPage()
loginPage.enterCredentials("anna@example.com", "securePass123")
loginPage.clickLogin()