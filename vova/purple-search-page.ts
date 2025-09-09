

class PurpleSearchPage{
    searchBox: string = "#search-input"
    searchButton: string = ".search-btn"
    resultsContainer: string = ".search-results"
     enterSearchTerm(term: string):string{
        console.log(term + 'found')
        return term
     }
     clickSearchButton():void{
        console.log('Push the button')
     }

}