class Products {
  constructor() {
    this.products =
      [{
        "id": 1,
        "name": "sildenafil citrate",
        "description": 'esta es una descripcion',
        "supplier": "Wisozk Inc",
        "quantity": 10,
        "cost": 1000,
      }, {
        "id": 2,
        "name": "Mountain Juniperus ashei ddsdsad sdsd",
        "description": 'esta es una descripcion',
        "supplier": "Keebler-Hilpert",
        "quantity": 20,
        "cost": 2000,
      }, {
        "id": 3,
        "name": "Dextromathorphan HBr",
        "description": 'esta es una descripcion',
        "supplier": "Schmitt-Weissnat",
        "quantity": 30,
        "cost": 3000,
      }];
    this.counter = 3;
  }
  get = function (id) {
    if (id) {
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i];
        if (product.id === id) {
          return product;
        }
      }
      return;
    } else {
      return this.products;
    }
  }

  add = function (product) {
    console.log('product', product);
    if (!product || !product.name) {
      return;
    }
    this.counter = this.counter + 1;
    product.id = this.counter;
    this.products.push(product);
    return product;
  }

  delete = function (id) {
    if (!id) {
      return;
    }
    for (var i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      if (product.id === id) {
        this.products.splice(i, 1);
        return;
      }
    }
    console.log('del prod', position, products[position])

  }

  modify = function (product) {
    for (let i = 0; i < this.products.length; i++) {
      const tempProduct = this.products[i];
      if (tempProduct.id === id) {
        this.products[i] = product;
        return product;
      }
    }
  }

  dibujar = ({ id, name, quantity, cost, description }) => (
    `
  <div class="col-md-4 col-sm-6 col-xs-12" id="product-${id}" style="margin-top: 16px;">
    <div class="card h-100">
      <div class="card-header bg-light d-flex justify-content-between align-items-center">
        <div style="color: black;"> ${name} </div> <div><button id="delete-button-product-${id}" class="btn btn-dark btn-sm">X</button></div>
      </div>
      <div class="card-body">
        ${description}
      </div>
      <div class="card-footer">
        Precio: $${cost}  <button id="addtocart-button-product-${id}" type="button"> add</button>
      </div>
    </div>
  </div>
  `
  );
}