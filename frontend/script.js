//Initialize Cart Count
let cartCount = +localStorage.getItem('cartCount') || 0;
document.getElementById('cart-count').textContent = cartCount;

function addToCart(event) {
    const item = event.target.closest('.cart-items');
    const name = item.querySelector('p').textContent;
    const img = item.querySelector('img').src;

    // Load existing cart from 'cart'
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if item already exists
    const existingItem = cart.find(product => product.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, img, price: 499, quantity: 1 }); // Add price here as needed
    }

    // Save updated cart back to 'cart'
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    document.getElementById('cart-count').textContent = cartCount;

    showToast("Item added to cart!");
}

//Add to Wishlist Logic
function addToWishlist(event) {
    const item = event.target.closest('.cart-items');
    const name = item.querySelector('p').textContent;
    const img = item.querySelector('img').src;

    let wishlistData = JSON.parse(localStorage.getItem('wishlistData')) || [];

    // Avoid duplicate entries
    if (!wishlistData.some(i => i.name === name)) {
        wishlistData.push({ name, img });
        localStorage.setItem('wishlistData', JSON.stringify(wishlistData));
        showToast("Added to wishlist!");
    } else {
        showToast("Already in wishlist!");
    }
}

//Attach Event Listeners
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', addToCart);
});

document.querySelectorAll('.wishlist-icon').forEach(icon => {
    icon.addEventListener('click', addToWishlist);
});

//Toast Function
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'toast';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

//LIVE SEARCH AND FILTER
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById("search-input");
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cartItems = document.querySelectorAll('.cart-items');

    // LIVE SEARCH
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const searchValue = searchInput.value.toLowerCase();
            cartItems.forEach(item => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(searchValue) ? 'block' : 'none';
            });
        });
    }

    // FILTER BUTTONS
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            cartItems.forEach(item => {
                const itemCategory = item.dataset.category;
                item.style.display = (category === 'all' || itemCategory === category) ? 'block' : 'none';
            });
        });
    });
});
