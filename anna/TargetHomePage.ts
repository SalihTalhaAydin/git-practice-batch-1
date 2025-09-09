class TargetHomePage{
    expectedMessage:string = "Hi,Anna.You have a bonus"
    minimumPurchase:number = 200

    cart():void{
        console.log("Check out")
    }

}

let target = new TargetHomePage()
console.log(target.expectedMessage)
console.log(target.minimumPurchase)
target.cart()
