class MenuItem {
  name: string = "";
  category: string = "";
}

class StarbucksMenu {
  items: MenuItem[] = [];

  addItem(name: string, category: string) {
    const item = new MenuItem();
    item.name = name;
    item.category = category;
    this.items.push(item);
  }

  getItemsByCategory(category: string): MenuItem[] {
    return this.items.filter(i => i.category === category);
  }
}