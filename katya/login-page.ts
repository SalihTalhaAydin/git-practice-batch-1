class LoginPage{
    login : string = "login@login.com"
    password : string = "P4ssw0rd!"

    loginFunction(): void{
        console.log("Typing login : " + this.login)
        console.log("Typing password : " + this.password)
    }
}