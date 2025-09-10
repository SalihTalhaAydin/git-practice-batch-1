// File: hp-home-page.ts
// Branch: hp-pages-development

class HpHomePage {
    searchBar: string = "#search"
    dealsSection: string = ".deals-banner"
    supportLink: string = ".support-link"

    searchProduct(product: string): void {
        console.log("Typing into search bar:", this.searchBar, "with", product)
    }

    viewDeals(): void {
        console.log("Viewing deals section:", this.dealsSection)
    }
}

let hpHome = new HpHomePage()
hpHome.searchProduct("Laptop")
hpHome.viewDeals()
