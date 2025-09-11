class LoginPage {

    userName = "username";
    password = "password";

    goToLogin(userName: string, password: string): void { 
console.log("Logging in...");
console.log("Username:", userName);
console.log("Password:", password);
    }
}
let pageLogin = new LoginPage();
pageLogin.goToLogin("alina", "chicago");