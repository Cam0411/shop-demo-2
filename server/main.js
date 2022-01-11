const ShopApi = "http://localhost:3000/shop"
const content = document.querySelector(".content .grid .row")

function renderShopAPi(){
    getShopApi(shops => {
        var htmls = shops.map(shop => {
            return `
            <div class="col l-3">
            <div class="detail">
            <img src="${shop.img}" alt="" srcset="">
            <p>${shop.title}</p>
            <p>${shop.price}</p>
            </div>
            </div>
            
            `
        })
        var html = htmls.join('')
        content.innerHTML = html
    })
}

function getShopApi(callback){
    fetch(ShopApi)
    .then(response => { return response.json()})
    .then(callback)
}
renderShopAPi()