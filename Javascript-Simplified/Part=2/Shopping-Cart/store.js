
import items from './items.json'
import { addToCart } from './shoppingCart.js'
import {formatCurrency} from 'E:/HTML Web pages/Training Website Projects/util-scripts/formatCurrency.js'

const storeItemTemplateEl = document.querySelector('#store-item-template')
const storeItemContainerEl = document.querySelector('[data-store-container]')

const IMAGE_URL = 'https://dummyimage.com/420x260'


export function setupStore(){
document.addEventListener('click',(e)=>{
if(e.target.matches('[data-add-to-cart-button]')){
    const id = e.target.closest('[data-store-item]').dataset.itemId
    addToCart(id)
}
})

    items.forEach(renderStoreItem)
}

function renderStoreItem(item){
const storeItem = storeItemTemplateEl.content.cloneNode(true)

const container =storeItem.querySelector('[data-store-item]')
container.dataset.itemId = item.id 
const name  = storeItem.querySelector('[data-name]')
name.innerText = item.name

const category  = storeItem.querySelector('[data-category]')
category.innerText = item.category

const image  = storeItem.querySelector('[data-image]')
image.src = `${IMAGE_URL}/${item.imageColor}/${item.imageColor}`

const price  = storeItem.querySelector('[data-price]')

price.innerText = formatCurrency(item.priceCents / 100) 



storeItemContainerEl.appendChild(storeItem)
}