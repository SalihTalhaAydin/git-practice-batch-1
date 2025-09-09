class PurpleProduct {
    productTitle: string = "Awesome Laptop";
    priceDisplay: string = "$999";
    reviewsSection: string = "★★★★☆";

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
}
const product = new PurpleProduct()
product.getProductInfo()
product.readCustomerReviews()