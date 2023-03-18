const productsListHtmlEl = document.querySelector(".products");
const cartHtmlEl = document.querySelector(".cart-items");

let products = [];

async function getProductsFromAPI() {
    const response = await fetch("data/products.json");
    return await response.json();
}

getProductsFromAPI().then(data => {
    console.log(data.products);
    products = data.products;
    renderProducts(data.products);
}).catch(error => console.log(error) )

function renderProducts(productsList) {
    productsList.forEach(product => {
        const productHtmlEl = `
            <div class="item">
                <div class="item-container">
                    <div class="item-img">
                        <img src="${product.imgSrc}">
                    </div>
                    <div class="desc">
                        <h2>${product.name}</h2>
                        <h2><small>$</small>${product.price}</h2>
                        <p>${product.description}</p>
                    </div>
                    <div class="add-to-wishlist"> 
                        <img src="icons/heart.png">
                    </div>
                    <div class="add-to-cart" onclick="addToCart(${product.id})">
                        <img src="./icons/bag-plus.png" alt="add to cart">
                    </div>
                </div>
            </div>
        `;
        productsListHtmlEl.innerHTML += productHtmlEl;
    });
}


let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCart();

function addToCart(productId) {
    console.log('Product id ', productId);
    // Daca produsul exista adaugat deja in cosul de cumparaturi: TRUE | FALSE
    const productAlreadyExistsInProductsArr = cart.some((elem) => elem.id === productId); // return TRUE sau FALSE
    if (productAlreadyExistsInProductsArr) { // => atunci
        //  doar trebuie sa crestem cantitatea pentru produsul cu ID ul corespunzator
        increseNumberOfProductsInCart(productId);
    } else {// => altfel
        // cauta produsul pe baza ID ului primit 
        const productById = products.find((elem) => elem.id === productId);
        // si adauga-l in cos 
        cart.push({
            ...productById,
            numberOfUnits: 1
        });
    }
    
    updateCart();
}

function updateCart() {
    renderCart();
    renderTotal();

    localStorage.setItem("cart", JSON.stringify(cart));
}
function renderCart() {
    cartHtmlEl.innerHTML = "";
    cart.forEach(item => {
        const cartHtmlElem = `
            <div class="cart-item"> 
                <div class="item-info" onclick=""> 
                    <img src="${item.imgSrc}">
                    <h4>${item.name}</h4>
                </div>
                <div class="unit-price">
                    <small>$</small>${item.price}
                </div>
                <div class="units">
                    <div class="btn minus" onclick="">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn plus" onclick="">+</div>
                </div>
            </div>
        `;
        cartHtmlEl.innerHTML += cartHtmlElem;
    })
}
function renderTotal() {

}