//les grande lignes du javascript sont les suivante: sauvegarder les données, generer le html et rendre le site interactive

//pour pouvoir acceder a des fichiers js de se referer entre eux, il faut 3 etape:
//1. Indiquer le fichier dans le html qui permettra d'acceder a d'autre fichier avec type="module"
//2. Exporter les elements des fichiers avec export
//3. Importer dans le fichier qui les exploitera
//il faut egalement que les import se fasse en tete de page et que le html se lance avec live server
//L'avantage d'utiliser des module au lieu de plusieur script est d'eviter les conflit de noms il est possible de changer le nom de l'import grace a as
//Egalement, l'ordre de chargement de fichier js n'est plus important 

//la bonne pratique pour l'oraganisation est de seprarer le code qui concerne une partie et l'importer sur le fichier principale 
//si une partie de js est amener a changer le DOM il est preferable de le garder dans le fichier principal

//permet de faire reference a des element exportable se trouvant dans d'autre fichier
import { cart, addToCart, updateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

//creation d'un tableau pour sauvegarder les données des produit representer par des objet.
let productHTML = '';

updateFromAmazon();

products.forEach((product) => {

  productHTML += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${formatCurrency(product.priceCents)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart"
    data-product-id="${product.id}">
      Add to Cart
    </button>
    </div>
    `
  //un data-attribute est une fonctionnalité HTML qui permet d'attacherune infromation a un element HTML
  //un data attirbute s'ecrit comme un attribut normal'nom = valeur' la difference est qu'il doit commencer par 'data' puis le nom souhaité ecrit en 'kebab-case' separer par des tirets
});

document.querySelector('.js-grid-product').innerHTML = productHTML;

//L'avantage de créer des element html avec le javascript est que l'on peut créer plusieur fois le meme elemnt avec le meme critere il suffit de créer un tableau d'objet qui comporte les données qui change selon les informations

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId; // le nom de l'attibut doit etre transformer de 'kebab-case' a 'kamelCase'

    addToCart(productId);

    updateFromAmazon();

  })
})

function updateFromAmazon() { document.querySelector('.js-cart-quantity').innerHTML = updateCartQuantity(); }