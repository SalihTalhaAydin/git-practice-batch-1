🟣 8 Purple.com Page Object Classes for Git Workflow Practice
1. 🏠 Purple Homepage Page
File: purple-homepage-page.ts
Branch: add-homepage-page
Variables: heroTitle: string = "The Purple Mattress", shopNowButton: string = "#shop-now-btn", navigationMenu: string = ".main-nav"
Methods: clickShopNow(), navigateToMattresses()
2. 🔐 Purple Login Page
File: purple-login-page.ts
Branch: add-login-page
Variables: emailField: string = "#email", passwordField: string = "#password", loginButton: string = ".login-btn"
Methods: enterCredentials(email: string, password: string), clickLogin()
3. 🛏️ Purple Mattress Page
File: purple-mattress-page.ts
Branch: add-mattress-page
Variables: mattressGrid: string = ".mattress-grid", sizeSelector: string = ".size-options", addToCartBtn: string = ".add-to-cart"
Methods: selectMattressSize(size: string), addMattressToCart()
4. 🛒 Purple Cart Page
File: purple-cart-page.ts
Branch: add-cart-page
Variables: cartItems: string = ".cart-item", quantityInput: string = ".quantity", checkoutButton: string = ".checkout-btn"
Methods: updateQuantity(newQty: number), proceedToCheckout()
5. 🔍 Purple Search Page
File: purple-search-page.ts
Branch: add-search-page
Variables: searchBox: string = "#search-input", searchButton: string = ".search-btn", resultsContainer: string = ".search-results"
Methods: enterSearchTerm(term: string), clickSearchButton()
6. 💳 Purple Checkout Page
File: purple-checkout-page.ts
Branch: add-checkout-page
Variables: billingForm: string = ".billing-form", paymentSection: string = ".payment-info", placeOrderBtn: string = ".place-order"
Methods: fillBillingInfo(), selectPaymentMethod()
7. 👤 Purple Account Page
File: purple-account-page.ts
Branch: add-account-page
Variables: profileSection: string = ".profile-info", orderHistory: string = ".order-list", saveButton: string = ".save-profile"
Methods: updateProfile(), viewOrderHistory()
8. 📱 Purple Product Page
File: purple-product-page.ts
Branch: add-product-page
Variables: productTitle: string = ".product-name", priceDisplay: string = ".price", reviewsSection: string = ".reviews"
Methods: getProductInfo(), readCustomerReviews()