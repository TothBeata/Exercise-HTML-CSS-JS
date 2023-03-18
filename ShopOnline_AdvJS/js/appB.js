const productsListHtmlEl = document.querySelector(".products");
const cartHtmlEl = document.querySelector(".cart-items");
//console.log(productsEl);
//render = se foloseste pentru inserare in pagina html;
let products = [];

//luam datele de la server
async function getProductsFropAPI() {
    const response = await fetch("data/products.json");
    return await response.json();
}
getProductsFropAPI().then(data => {
    console.log(data.products);
    products = data.products //asignez alta valoare la variabila products
    //injectam produsele prin functia render
    renderProducts(data.products);
}).catch(error => console.log(error));

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

let cart = JSON.parse(localStorage.getItem('cart')) || []; //JSON.parse = face number
upDateCart();

function addToCart(productId) {
    console.log('Product id', productId);
    //Daca produsul exista adaugat in cosul de cumparaturi true || false => atunci doar trebuie sa crestem cantitate ptr produsul cu ID-ul corespunzator
    const productAlredyExistsInProductsArr = cart.some((elem) => elem.id === productId) //return true||false
    if (productAlredyExistsInProductsArr) {
        changeNumberOfProductsInCart(productId, 'plus'); //cream o functie ptr crestere cantitate

    } else {
        //altfel cauta produsul pe baza ID-lui primit si adauga-l in cos
        const productById = products.find((elem) => elem.id === productId); //identificam produsul clickuit dupa id jSon
        //console.log(productById)
        cart.push({
            ...productById, //toate elementele (Obiectul) ce contine (id, name, prace,instock...) + adauga numberOfUnits
            numberOfUnits: 1
        });
    }
    upDateCart();
}

//calculeaza valoare cosul
function renderSubtotal() {

}

function upDateCart() {
    renderCart();
    renderTotal();

    localStorage.setItem("cart", JSON.stringify(cart)); //ce avem in valoarea CART se salveaza in localStorage

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

//schimba nr produse din cos
function changeNumberOfProductsInCart(productIdId, action) {

    cart = cart.map(productItem => {
        console.log(productItem);
        let numberOfUnitsLocal = productItem.numberOfUnits

        if (productItem.id === productIdId) {
            if (action === 'plus') {
                if (numberOfUnitsLocal < productItem.instock) {
                    numberOfUnits++

                } else {
                    window.alert('Ne pare rau ati atins limita stocului disponobil')
                }

                if (action === 'minus' && numberOfUnitsLocal < 1) {
                    numberOfUnits--;
                }
            }
        }

        return {
            ...productItem,
            numberOfUnits: numberOfUnitsLocal
        }
    });

}

//Sterge produsele din stoc
function removeProductFromCart() {
    // sa identific produsul in lista cosului de cum. pe care vreau sa il sterg pe baza id
    // parcurgem arrayul de cart si verific id-ul produsului din iteratie ===productId
    //=> am gasit produsul care trebuie sters
    // stergem produsul respectiv din Array
    //

    cart = cart.filter((productItem) => productItem.id !== productId);

    upDateCart();

}
