//Export permet d'etre utiliser par d'autre fichier

export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
    cart = [];
}


export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {

        if (productId === cartItem.productId) {
            matchingItem = cartItem //matchingItem pointe vers la memoire de la machine ou se trouve item
        }

    })

    if (matchingItem) {
        matchingItem.quantity++
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        })
    }

    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)
        }
    })

    cart = newCart;

    saveToStorage();
}

export function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity
    })

    return cartQuantity;
}

export function updateQuantity(productId, newQuantity) {
    cart.forEach((cartItem) => {
        if(cartItem.productId === productId) {
            cartItem.quantity = newQuantity
        }
    })

    saveToStorage();    
}