class SephoraHomePage {
    expectedMessage: string = "New week, new you, Anna."
    maxItems: number = 10

    checkout(): void {
        console.log("You can checkout now")
    }
}

let  home = new SephoraHomePage()
console.log(home.expectedMessage)
console.log(home.maxItems)
home.checkout()