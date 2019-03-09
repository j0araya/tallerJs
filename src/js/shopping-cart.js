class ShoppingCart {
  constructor() {
    this.products = [];
  }
  
  get = (id) => {
    return id ? this.products.find(c => c.id === id) : this.products;
  }

  add = (product) => {
    this.products.push({ ...product });
    return;
  }

  delete = (id) => {
    this.products = this.products.filter(p => p.id !== id);
    return;
  }

  modify = (product) => {
    this.products = this.products.map(p => p.id === product.id ? product : p);
    return;
  }
}