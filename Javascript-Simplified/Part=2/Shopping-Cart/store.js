import items from './items.json'

const storeItemTemplateEl = document.querySelector('#store-item-template')
const storeItemContainer = document.querySelector('[data-store-container]')

export function setupStore(){
    items.forEach(renderStoreItem)
}

function renderStoreItem(item){
const storeItem = storeItemTemplateEl.content.cloneNode(true)

const container =storeItem.querySelector('[data-store-item]')
container.dataset.itemId = item.id 
const name  = storeItem.querySelector('[data-name]')
name.innerText = item.name
}