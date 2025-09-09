
class PurpleCheckoutPage {
    billingForm: string = ".billing-form"
    paymentSection: string = ".payment-info"
    placeOrderBtn: string = ".place-order"
    fillBillingInfo(): void {
        console.log('Fill billing info...')
    }
    selectPaymentMethod(): void {
        console.log('Select payment methods...')
    }
}