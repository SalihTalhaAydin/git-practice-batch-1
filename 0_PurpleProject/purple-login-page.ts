

class PurpleProductPage {
    productTitle: string = ".product-title"
    priceTag: string = ".price"
    addToCartButton: string = ".add-to-cart"

    viewProduct(): void {
        console.log("Viewing product title:", this.productTitle)
        console.log("Viewing price:", this.priceTag)
    }

    addToCart(): void {
        console.log("Clicking add to cart button:", this.addToCartButton)
    }
}

let productPage = new PurpleProductPage()
productPage.viewProduct()
productPage.addToCart()
