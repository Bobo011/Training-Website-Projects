import items from "E:/HTML Web pages/Training Website Projects/Javascript-Simplified/Part=2/Shopping-Cart/items.json";
import { formatCurrency } from "../../../util-scripts/formatCurrency";

const cartButton = document.querySelector("[data-cart-button]");

const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");

let shoppingCart = [];
const IMAGE_URL = "https://dummyimage.com/210x130/";
const cartItemTemplateEl = document.querySelector("#cart-item-template");

const cartItemContainer = document.querySelector("[data-cart-items]");

export function setupShoppingCart() {}

//remove items from cart
//show/hide the cart button when it has no items or when it goes from 0 to 1 item
//Persist across multiple pages

//show/hide the cart when clicked
cartButton.addEventListener("click", () => {
  cartItemsWrapper.classList.toggle("invisible");
});

export function addToCart(id) {
  shoppingCart.push({ id: id, quantity: 1 });
  renderCart();
}

function renderCart() {
    cartItemContainer.innerHTML = ""
    shoppingCart.forEach(entry => {
      const item = items.find(i => entry.id === i.id)
      const cartItem = cartItemTemplateEl.content.cloneNode(true)
  
      const container = cartItem.querySelector("[data-item]")
      container.dataset.itemId = item.id
  
      const name = cartItem.querySelector("[data-name]")
      name.innerText = item.name
  
      const image = cartItem.querySelector("[data-image]")
      image.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`
  
      if (entry.quantity > 1) {
        const quantity = cartItem.querySelector("[data-quantity]")
        quantity.innerText = `x${entry.quantity}`
      }
  
      const price = cartItem.querySelector("[data-price]")
      price.innerText = formatCurrency((item.priceCents * entry.quantity) / 100)
  
      cartItemContainer.appendChild(cartItem)
    })
}

//add items to cart
//handle click event for adding
//handle multiple of the same items in the cart
//calculate accurate total
