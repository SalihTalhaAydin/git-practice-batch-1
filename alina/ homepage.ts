class Homepage {
  
    text = "Text ";
    saveButton = "Save button";
    
    addText(text: string): string { 
        let button = "Save Button";
             return "Added text: " + text + " and clicked " + button;
    }
}
    let homePage = new Homepage();
    console.log(homePage.addText("Check the updates"));