document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();

    document.getElementById('cart').addEventListener('click', function () {
        document.getElementById('cartDropdown').classList.toggle('show');
    });

    window.onclick = function (event) {
        if (!event.target.matches('.cart-icon')) {
            let dropdowns = document.getElementsByClassName('dropdown-content');
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
});

function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartItems();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').innerText = cart.length;
}

function updateCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDropdown = document.getElementById('cartItems');
    cartDropdown.innerHTML = '';
    cart.forEach(item => {
        let div = document.createElement('div');
        div.innerText = `${item.name} - ${item.price}kr`;
        cartDropdown.appendChild(div);
    });
}

window.removeFromCart = function (index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateCartItems();
};



function proceedToCheckout() {
    window.location.href = 'checkout.html';
}