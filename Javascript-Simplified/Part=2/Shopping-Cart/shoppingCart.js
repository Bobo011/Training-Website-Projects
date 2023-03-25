import items from "E:/HTML Web pages/Training Website Projects/Javascript-Simplified/Part=2/Shopping-Cart/items.json";
import { formatCurrency } from "../../../util-scripts/formatCurrency";

const cartButton = document.querySelector("[data-cart-button]");

const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");

let shoppingCart = [];
const IMAGE_URL = "https://dummyimage.com/210x130/";
const cartItemTemplateEl = document.querySelector("#cart-item-template");

const cartItemContainer = document.querySelector("[data-cart-items]");

const cartQuantity = document.querySelector('[data-cart-quantity]')

const cartTotal = document.querySelector('[data-cart-total]')

const cart = document.querySelector('[data-cart]')


export function setupShoppingCart() {
    renderCart()
}



//show/hide the cart when clicked
cartButton.addEventListener("click", () => {
  cartItemsWrapper.classList.toggle("invisible");
});

export function addToCart(id) {
    let existingItem = shoppingCart.find(entry => entry.id === id)
    if(existingItem){
        existingItem.quantity++
    }else{
  shoppingCart.push({ id: id, quantity: 1 });
}
renderCart();
}

function removeFromCart(id){
    let existingItem = shoppingCart.find(entry => entry.id === id)

    if(existingItem ==null)return
    shoppingCart.filter(entry =>entry.id === i)
}


function renderCart(){
    renderCartItems()
    if(shoppingCart.length === 0){
        hideCart()
    }else{
        showCart()
        renderCartItems()
    }


}

function hideCart(){
cart.classList.add('invisible')
cartItemsWrapper.classList.add('invisible')
}

function showCart(){
    cart.classList.remove('invisible')
}

function renderCartItems() {

    cartQuantity.innerText = shoppingCart.length

    const totalCents =  shoppingCart.reduce((sum,entry)=>{
        const item = items.find(i => entry.id === i.id)
        return sum + item.priceCents*entry.quantity
    },0)
    cartTotal.innerText = formatCurrency(totalCents / 100)

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
