const products = [
  {
    id: "apple",
    name: "Apple",
    description: "Crisp red apples, perfect for snacking or baking.",
    pricePerUnit: 1.25,
    unit: "item",
    image: "🍎",
  },
  {
    id: "banana",
    name: "Banana",
    description: "Sweet bananas great for smoothies and snacks.",
    pricePerUnit: 0.75,
    unit: "item",
    image: "🍌",
  },
  {
    id: "grapes",
    name: "Grapes",
    description: "Juicy grapes that are perfect for sharing.",
    pricePerUnit: 3.5,
    unit: "lb",
    image: "🍇",
  },
  {
    id: "orange",
    name: "Orange",
    description: "Fresh oranges with bright citrus flavor.",
    pricePerUnit: 1.1,
    unit: "item",
    image: "🍊",
  },
  {
    id: "strawberry",
    name: "Strawberry",
    description: "Sweet strawberries for desserts and snacks.",
    pricePerUnit: 2.9,
    unit: "box",
    image: "🍓",
  },
  {
    id: "pineapple",
    name: "Pineapple",
    description: "Tropical pineapple with juicy, sweet flesh.",
    pricePerUnit: 2.5,
    unit: "item",
    image: "🍍",
  },
  {
    id: "watermelon",
    name: "Watermelon",
    description: "Large and refreshing watermelon for summer.",
    pricePerUnit: 6.0,
    unit: "item",
    image: "🍉",
  },
  {
    id: "kiwi",
    name: "Kiwi",
    description: "Tangy kiwis with bright green interior.",
    pricePerUnit: 0.9,
    unit: "item",
    image: "🥝",
  },
  {
    id: "mango",
    name: "Mango",
    description: "Ripe mangoes with sweet, tropical flavor.",
    pricePerUnit: 2.25,
    unit: "item",
    image: "🥭",
  },
  {
    id: "blueberry",
    name: "Blueberry",
    description: "Fresh blueberries for cereal, yogurt, or baking.",
    pricePerUnit: 4.0,
    unit: "cup",
    image: "🫐",
  },
];

const state = {
  currentPage: "products",
  cart: {},
  searchQuery: "",
};

const pageTitle = document.getElementById("page-title");
const productsPage = document.getElementById("products-page");
const cartPage = document.getElementById("cart-page");
const checkoutPage = document.getElementById("checkout-page");
const successPage = document.getElementById("success-page");
const notification = document.getElementById("notification");
const cartBadge = document.getElementById("cart-badge");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

function init() {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setPage(link.dataset.page);
    });
  });

  setPage(state.currentPage);
}

function setPage(page) {
  state.currentPage = page;
  pageTitle.textContent = getPageTitle(page);
  navLinks.forEach((link) =>
    link.classList.toggle("active", link.dataset.page === page),
  );

  productsPage.classList.toggle("hidden", page !== "products");
  cartPage.classList.toggle("hidden", page !== "cart");
  checkoutPage.classList.toggle("hidden", page !== "checkout");
  successPage.classList.toggle("hidden", page !== "success");

  if (page === "products") renderProductsPage();
  if (page === "cart") renderCartPage();
  if (page === "checkout") renderCheckoutPage();
  if (page === "success") renderSuccessPage();
}

function getPageTitle(page) {
  switch (page) {
    case "products":
      return "Products";
    case "cart":
      return "Shopping Cart";
    case "checkout":
      return "Checkout";
    case "success":
      return "Thank You!";
    default:
      return "Fruit Shop";
  }
}

function renderProductsPage() {
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
  );

  productsPage.innerHTML = `
    <div class="product-search">
      <input
        id="search-input"
        type="text"
        placeholder="Search products..."
        value="${state.searchQuery}"
        aria-label="Search products"
      />
    </div>
    <div class="product-grid">
      ${filteredProducts
        .map(
          (product) => `
        <article class="product-card">
          <div class="product-image" aria-hidden="true" style="font-size: 2rem">${product.image}</div>
          <div class="product-meta">
            <h3>${product.name}</h3>
            <p>${formatPrice(product.pricePerUnit)} / ${product.unit}</p>
            <p style="color: #6b7280; font-size: 0.9rem;">${product.description}</p>
          </div>
          <div class="product-control">
            <input class="product-qty" type="number" min="1" value="1" data-product-id="${product.id}" aria-label="Quantity for ${product.name}" />
            <button class="button add-to-cart" data-product-id="${product.id}" type="button">Add</button>
          </div>
        </article>
      `,
        )
        .join("")}
    </div>
  `;

  document.getElementById("search-input").addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderProductsPage();
  });

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const qtyInput = document.querySelector(
        `.product-qty[data-product-id="${productId}"]`,
      );
      const quantity = Number(qtyInput.value) || 1;
      addToCart(productId, quantity);
    });
  });
}

function renderSuccessPage() {
  const itemCount = Object.values(state.cart).reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  const total = getCartTotal();

  successPage.innerHTML = `
    <div class="success-card">
      <div style="font-size: 3rem">✅</div>
      <h2>Thank You for Your Order!</h2>
      <p style="color: #6b7280; line-height: 1.6;">
        Your order has been successfully processed.
      </p>
      <div style="background: #f3f4f6; padding: 20px; border-radius: 12px; text-align: left;">
        <p><strong>Order Summary:</strong></p>
        <p>Items Ordered: ${itemCount}</p>
        <p>Total Amount: ${formatPrice(total)}</p>
      </div>
      <p style="color: #6b7280; font-size: 0.9rem;">
        Thank you for shopping at Fruit Shop Prototype! Your cart has been cleared.
      </p>
      <button class="button" id="continue-shopping-success" type="button">Continue Shopping</button>
    </div>
  `;

  document
    .getElementById("continue-shopping-success")
    .addEventListener("click", () => {
      state.cart = {};
      state.searchQuery = "";
      updateCartBadge();
      setPage("products");
    });
}

function renderCartPage() {
  const cartItems = Object.values(state.cart);

  if (!cartItems.length) {
    cartPage.innerHTML = `
      <p>Your cart is empty. Add items from the Products page to get started.</p>
    `;
    return;
  }

  cartPage.innerHTML = `
    <div class="product-grid">
      ${cartItems
        .map((item) => {
          const product = products.find((p) => p.id === item.productId);
          const itemTotal = item.quantity * product.pricePerUnit;
          return `
          <article class="cart-item">
            <div>
              <h3>${product.image} ${product.name}</h3>
              <p>${formatPrice(product.pricePerUnit)} / ${product.unit}</p>
              <p><strong>Total:</strong> ${formatPrice(itemTotal)}</p>
            </div>
            <div class="cart-item-controls">
              <button class="small-button qty-change" data-product-id="${item.productId}" data-change="-1" type="button">-</button>
              <span>${item.quantity}</span>
              <button class="small-button qty-change" data-product-id="${item.productId}" data-change="1" type="button">+</button>
              <button class="small-button" data-remove-id="${item.productId}" type="button">Remove</button>
            </div>
          </article>
        `;
        })
        .join("")}
    </div>
    <div class="summary-row">
      <strong>Subtotal</strong>
      <span>${formatPrice(getCartTotal())}</span>
    </div>
    <div class="summary-row" style="justify-content: flex-end; gap: 12px; margin-top: 16px;">
      <button class="button-secondary" id="continue-shopping" type="button">Continue Shopping</button>
      <button class="button" id="go-checkout" type="button">Proceed to Checkout</button>
    </div>
  `;

  document.querySelectorAll(".qty-change").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;
      const change = Number(button.dataset.change);
      updateCartQuantity(productId, change);
    });
  });

  document.querySelectorAll("[data-remove-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.removeId;
      removeFromCart(productId);
    });
  });

  document
    .getElementById("continue-shopping")
    .addEventListener("click", () => setPage("products"));
  document
    .getElementById("go-checkout")
    .addEventListener("click", () => setPage("checkout"));
}

function renderCheckoutPage() {
  const cartItems = Object.values(state.cart);

  if (!cartItems.length) {
    checkoutPage.innerHTML = `
      <p>Your cart is empty. Add some fruits to the cart before checking out.</p>
    `;
    return;
  }

  checkoutPage.innerHTML = `
    <div class="product-grid">
      ${cartItems
        .map((item) => {
          const product = products.find((p) => p.id === item.productId);
          return `
          <article class="product-card">
            <div style="font-size: 2rem">${product.image}</div>
            <div class="product-meta">
              <h3>${product.name}</h3>
              <p>Quantity: ${item.quantity}</p>
            </div>
            <div class="product-control">
              <p>${formatPrice(item.quantity * product.pricePerUnit)}</p>
            </div>
          </article>
        `;
        })
        .join("")}
    </div>
    <div class="summary-row">
      <strong>Total</strong>
      <span>${formatPrice(getCartTotal())}</span>
    </div>
    <div style="margin-top: 20px; text-align: right;">
      <button class="button" id="process-order" type="button">Process Order</button>
    </div>
  `;

  document.getElementById("process-order").addEventListener("click", () => {
    setPage("success");
  });
}

function addToCart(productId, quantity) {
  const normalizedQty = Math.max(1, quantity);
  const product = products.find((p) => p.id === productId);
  state.cart[productId] = state.cart[productId] || { productId, quantity: 0 };
  state.cart[productId].quantity += normalizedQty;
  updateCartBadge();
  showNotification(`✓ ${product.name} added to cart`);
}

function updateCartQuantity(productId, change) {
  if (!state.cart[productId]) return;
  state.cart[productId].quantity = Math.max(
    0,
    state.cart[productId].quantity + change,
  );
  if (state.cart[productId].quantity === 0) {
    delete state.cart[productId];
  }
  updateCartBadge();
  renderCartPage();
}

function removeFromCart(productId) {
  delete state.cart[productId];
  updateCartBadge();
  renderCartPage();
}

function getCartTotal() {
  return Object.values(state.cart).reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    return sum + item.quantity * product.pricePerUnit;
  }, 0);
}

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

function showNotification(message) {
  notification.textContent = message;
  notification.classList.remove("hidden");
  setTimeout(() => {
    notification.classList.add("hidden");
  }, 3000);
}

function updateCartBadge() {
  const count = Object.values(state.cart).reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  cartBadge.textContent = count;
}

window.addEventListener("DOMContentLoaded", init);
