import { cart, removeFromCart, updateCartQuantity, updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js"
import { formatCurrency } from "./utils/money.js";

let cartSummaryHTML = '';

updateFromCheckout()

cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    let matchingProduct;

    products.forEach((product) => {
        if (productId === product.id) {
            matchingProduct = product;
        }
    });

    cartSummaryHTML += `
    <div class="cart-item-container 
    js-cart-item-container-${matchingProduct.id}">
    <div class="delivery-date">
        Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
        <img class="product-image"
        src="${matchingProduct.image}">

        <div class="cart-item-details">
        <div class="product-name">
            ${matchingProduct.name}
        </div>
        <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
        </div>
        <div class="product-quantity">
            <span>
            Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
            Update
            </span>
            <p class="error js-error-${matchingProduct.id}"></p>
            <input class="quantity-input js-quantity-update-${matchingProduct.id}">
            </input>
            <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}"> 
                Save
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
            Delete
            </span>
        </div>
        </div>

        <div class="delivery-options">
        <div class="delivery-options-title">
            Choose a delivery option:
        </div>
        <div class="delivery-option">
            <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
            <div>
            <div class="delivery-option-date">
                Tuesday, June 21
            </div>
            <div class="delivery-option-price">
                FREE Shipping
            </div>
            </div>
        </div>
        <div class="delivery-option">
            <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
            <div>
            <div class="delivery-option-date">
                Wednesday, June 15
            </div>
            <div class="delivery-option-price">
                $4.99 - Shipping
            </div>
            </div>
        </div>
        <div class="delivery-option">
            <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
            <div>
            <div class="delivery-option-date">
                Monday, June 13
            </div>
            <div class="delivery-option-price">
                $9.99 - Shipping
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    `
});

document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-update-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const linkContainer = document.querySelector(`.js-cart-item-container-${link.dataset.productId}`);

            linkContainer.classList.add('is-editing-quantity');
        })
    })

document.querySelectorAll('.js-save-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const linkContainer = document.querySelector(`.js-cart-item-container-${link.dataset.productId}`);
            const newQuantity = Number(document.querySelector(`.js-quantity-update-${link.dataset.productId}`).value);

            if (newQuantity <= 0 || newQuantity >= 1000) {
                document.querySelector(`.js-error-${link.dataset.productId}`).innerHTML = 'Entrer un nombre valide';
            } else {
                document.querySelector(`.js-error-${link.dataset.productId}`).innerHTML = '';

                updateQuantity(link.dataset.productId, newQuantity)

                linkContainer.classList.remove('is-editing-quantity');

                updateFromCheckout();
                document.querySelector(`.js-quantity-label-${link.dataset.productId}`).innerHTML = newQuantity;
            }
        })
    })

document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);

            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();

            updateFromCheckout();
        })
    })

function updateFromCheckout() { document.querySelector('.js-cart-quantity-item-checkout').innerHTML = `${updateCartQuantity()} items`; }