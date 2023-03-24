import { enUS } from 'date-fns/locale'
import items from './items.json'

const storeItemTemplateEl = document.querySelector('#store-item-template')
const storeItemContainerEl = document.querySelector('[data-store-container]')

const IMAGE_URL = 'https://dummyimage.com/420x260'


export function setupStore(){
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
const formatter = new Intl.NumberFormat(enUS,{style: 'currency', currency:'USD'})
price.innerText = formatter.format(item.priceCents / 100) 



storeItemContainerEl.appendChild(storeItem)
}