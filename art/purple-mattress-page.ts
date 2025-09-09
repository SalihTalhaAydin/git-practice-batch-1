// 3. 🛏️ Purple Mattress Page - Art
// File: purple-mattress-page.ts
// Branch: add-mattress-page
// Variables: mattressGrid: string = ".mattress-grid", sizeSelector: string = ".size-options", addToCartBtn: string = ".add-to-cart"
// Methods: selectMattressSize(size: string), addMattressToCart()

class PurpleMattressPage {

    mattressGrid: string = ".mattress-grid"
    sizeSelector: string = ".size-options"
    addToCartBtn: string = ".add-to-cart"

    selectMattressSize(size: string): void {
        console.log('Selecting ' + size + ' size mattress...')
    }

    addMattressToCart(): void {
        console.log('Adding mattress to cart...')
    }

}