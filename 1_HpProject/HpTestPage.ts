class HpHomePage{
    expectedMessage:string='Weclome to HP'
    myMainTitleOfTheHomepage():void{
        console.log('Make life Better')
    }
}

class HpCartPage{
titleMessageInsideTheCart:string='Cart is empty'
 addingStuffToTheCart(subject:string):void{
    console.log(subject)
    return
 }

}