class GreenProduct {
    productTitle: string = "Eco-Friendly Water Bottle";
    priceDisplay: string = "$25";
    reviewsSection: string = "★★★★★ Great for everyday use!";
    stockAvailable: boolean = true;

    getProductInfo() {
        if (this.productTitle && this.priceDisplay) {
            console.log("Product Title:", this.productTitle);
            console.log("Price:", this.priceDisplay);
        } else {
            console.log("Product info not available.");
        }
    }
    

    readCustomerReviews() {
        if (this.reviewsSection) {
            console.log("Customer Reviews:", this.reviewsSection);
        } else {
            console.log("No reviews found.");
        }
    }

    checkStock() {
        if (this.stockAvailable) {
            console.log("Status: In Stock");
        } else {
            console.log("Status: Out of Stock");
        }
    }
}

const greenProduct = new GreenProduct();
greenProduct.getProductInfo();
greenProduct.readCustomerReviews();
greenProduct.checkStock();
