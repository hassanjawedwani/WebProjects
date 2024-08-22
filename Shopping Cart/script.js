const dessertContainer = document.getElementById("desserts-container");
const showCartBtn = document.getElementById("show-cart-btn");
const cartContainer = document.getElementById("cart-container");
const showCartBtnText = document.getElementById("show-cart-btn-text");
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "Vanilla Cupcakes (6 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
  {
    id: 2,
    name: "French Macaron",
    price: 3.99,
    category: "Macaron",
  },
  {
    id: 3,
    name: "Pumpkin Cupcake",
    price: 3.99,
    category: "Cupcake",
  },
  {
    id: 4,
    name: "Chocolate Cupcake",
    price: 5.99,
    category: "Cupcake",
  },
  {
    id: 5,
    name: "Chocolate Pretzels (4 Pack)",
    price: 10.99,
    category: "Pretzel",
  },
  {
    id: 6,
    name: "Strawberry Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 7,
    name: "Chocolate Macarons (4 Pack)",
    price: 9.99,
    category: "Macaron",
  },
  {
    id: 8,
    name: "Strawberry Pretzel",
    price: 4.99,
    category: "Pretzel",
  },
  {
    id: 9,
    name: "Butter Pecan Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 10,
    name: "Rocky Road Ice Cream",
    price: 2.99,
    category: "Ice Cream",
  },
  {
    id: 11,
    name: "Vanilla Macarons (5 Pack)",
    price: 11.99,
    category: "Macaron",
  },
  {
    id: 12,
    name: "Lemon Cupcakes (4 Pack)",
    price: 12.99,
    category: "Cupcake",
  },
];

products.forEach(({ id, name, price, category }) => {
  dessertContainer.innerHTML += `
    <div class="dessert-card">
      <h2>${name}</h2>
      <p>$${price}</p>
      <p>Category: ${category}</p>
      <button type="button" class="btn add-cart-btn" id=${id}>Add to cart</button>
    </div>
  `;
});



showCartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  if (isCartShowing) {
    cartContainer.classList.remove("hide");
    showCartBtnText.textContent = "Hide";
  } else {
    cartContainer.classList.add("hide");
    showCartBtnText.textContent = "Show";
  }
});


class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(id, items) {
    const item = items.find(item => item.id === id);
    this.items.push(item);
  }

  renderUI() {
    console.log(this.items);
  }
};

const cart = new ShoppingCart();

const addCartBtns = document.getElementsByClassName('add-cart-btn');
[...addCartBtns].forEach(btn => {
  btn.addEventListener("click", (event) => {
    cart.addItem(Number(event.target.id), products);
    cart.renderUI();
  });
})