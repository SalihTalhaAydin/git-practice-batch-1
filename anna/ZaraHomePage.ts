class ZaraMainPage{
    expectedMessage: string ="Zara"
    saleToday: number= 50

    bag():void{
        console.log("add to bag")
    }
}

let zara = new ZaraMainPage

console.log(zara.expectedMessage)
console.log(zara.saleToday + "per cent")

zara.bag()