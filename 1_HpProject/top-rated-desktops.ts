class TopRatedDesktops{

selectFilterExpectedMessage : string = "Selecting filters will refresh results and may change available options."
sortByAutomaticallyChosenOption : string = "Best seller"

    clearAllFilters(){
        console.log("Cleared all of the filters")
    }

    priceRange(minimumPrice : number, maximumPrice : number){
        console.log("Showing all products from " + minimumPrice +" to " + maximumPrice)
    }
}
