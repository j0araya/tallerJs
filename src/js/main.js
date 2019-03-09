
const products = new Products();
const shoppingCart = new ShoppingCart();

var htmlProducts;
var formProduct;


// const productView = ({ id, name, quantity, cost, description }) => (
//   `
//   <div class="col-md-4 col-sm-6 col-xs-12" id="product-${id}" style="margin-top: 16px;">
//     <div class="card h-100">
//       <div class="card-header bg-light d-flex justify-content-between align-items-center">
//         <div style="color: black;"> ${name} </div> <div><button id="delete-button-product-${id}" class="btn btn-dark btn-sm">X</button></div>
//       </div>
//       <div class="card-body">
//         ${description}
//       </div>
//       <div class="card-footer">
//         Precio: $${cost}  <button id="addtocart-button-product-${id}" type="button"> add</button>
//       </div>
//     </div>
//   </div>
//   `
// );

const shoppingCartView = ({ id, name, quantity, cost, description }) => (
  `
  <a id="shoppingcart-${id}" href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <div> <h5 class="mb-1">${name}</h5> </div> <div><button id="delete-button-shoppingcart-${id}" class="btn btn-dark btn-sm">X</button></div>
    </div>
    <p class="mb-1">${description}</p>
    <small>$${cost}</small>
  </a>
  `
)


function createProduct() {

  const nameProduct = document.getElementById('name-product').value;
  const description = document.getElementById('description-product').value;
  const cost = document.getElementById('cost-product').value;
  const quantity = document.getElementById('quantity-product').value;

  const newProduct = {
    name: nameProduct,
    description: description,
    cost,
    quantity,
  };

  // var newProduct = {};
  // for (let item of formProduct.getElementsByTagName('input')) {
  //   newProduct = {
  //     ...newProduct,
  //     [item.id.split('-')[0]]: item.value,
  //   }
  // }

  products.add(newProduct);
  generateProducts();
}


function generateProducts() {
  htmlProducts.innerHTML = products.get().map(p => products.dibujar(p)).join('');
}

function generateShoppingCart() {
  htmlShoppingCart.innerHTML = shoppingCart.get().map(sc => shoppingCartView(sc)).join('');
}

function productHandler(event) {
  const [action, element, type, id] = event.target.id.split('-');
  console.log(event);
  if (element !== 'button') return;
  switch (action) {
    case ('addtocart'):
      const product = products.get(id * 1);
      shoppingCart.add(product);
      products.delete(id * 1);
      generateProducts();
      generateShoppingCart();
      break;
    case ('delete'):
      products.delete(id * 1);
      generateProducts();
      break;
    default:
      break;
  }

}

function shoppingCartHanlder(event) {
  const [action, element, type, id] = event.target.id.split('-');
  if (element !== 'button') return;
  switch (action) {
    case 'delete':
      const product = shoppingCart.get(id * 1);
      console.log('delet', product);
      products.add({ ...product });
      shoppingCart.delete(id * 1);
      generateProducts();
      generateShoppingCart();
      break;
    default:
      break;
  }
}

// function addToShoppingCart(event) {
//   console.log('add-to-shopping-cart', event);
//   const [action, idProduct] = event.target.id.split('-button-');
//   console.log('action', action);
//   if (!idProduct) return;
//   if (action === 'add') {

//   }

//   removeProduct(idProduct);
//   const product = products.get(ParseInt(idProduct.split('-')[1]), 10);
//   shoppingCart.add(product);
//   htmlShoppingCart.innerHTML = shoppingCart.get().map(sc => shoppingCartView(sc)).join('');
// }

// function removeProduct(id) {
//   console.log('remove-from-shopping-cart', event);
//   const product = htmlProducts.querySelector(`div#${id}`);
//   products.delete(newProduct);
//   generateProducts();
//   htmlProducts.removeChild(product);
//   // const 
// }


document.addEventListener("DOMContentLoaded", () => {
  htmlProducts = document.getElementById('products');
  formProduct = document.getElementById('new-product');
  htmlShoppingCart = document.getElementById('shopping-cart');

  generateProducts();
});
