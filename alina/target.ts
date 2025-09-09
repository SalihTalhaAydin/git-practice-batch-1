class TargetHomePage {
  welcomeMessage = "Shop more, spend less";
  goToCart(items: number): number {
    let cartItems = 5;
    cartItems = cartItems + items;
    console.log("All items added:", cartItems);
    return cartItems;
  }
}

