class SteamHomePage {
    expectedBalanceMessage = 'Add Funds'
    expectedAmountMessage = 100

    addFundsButton(): void {
        console.log('Clicking ' + this.expectedBalanceMessage 
            + ' button and choosing ' + this.expectedAmountMessage 
            + '$ option')
    }
}