class TargetStore {
    storeName: string = "Target";
    welcomeMessage: string = "Expect More. Pay Less.";

    showWelcome() {
        console.log("Welcome to " + this.storeName);
        console.log(this.welcomeMessage);
    }
}

const target = new TargetStore();
target.showWelcome();