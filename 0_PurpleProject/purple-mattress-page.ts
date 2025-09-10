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