// Sample Products Data
const products = [
    {
        id: 1,
        name: 'Premium Headphones',
        price: 129.99,
        emoji: '🎧',
        description: 'High-quality sound with noise cancellation',
        rating: '⭐⭐⭐⭐⭐'
    },
    {
        id: 2,
        name: 'Wireless Mouse',
        price: 49.99,
        emoji: '🖱️',
        description: 'Ergonomic design with precision tracking',
        rating: '⭐⭐⭐⭐'
    },
    {
        id: 3,
        name: 'Gaming Keyboard',
        price: 99.99,
        emoji: '⌨️',
        description: 'RGB lighting with mechanical switches',
        rating: '⭐⭐⭐⭐⭐'
    },
    {
        id: 4,
        name: 'USB-C Cable',
        price: 19.99,
        emoji: '🔌',
        description: 'Fast charging and data transfer',
        rating: '⭐⭐⭐⭐'
    },
    {
        id: 5,
        name: 'Phone Stand',
        price: 24.99,
        emoji: '📱',
        description: 'Adjustable stand for all devices',
        rating: '⭐⭐⭐⭐'
    },
    {
        id: 6,
        name: 'Webcam HD',
        price: 79.99,
        emoji: '📷',
        description: '1080p video with auto-focus',
        rating: '⭐⭐⭐⭐⭐'
    },
    {
        id: 7,
        name: 'Screen Protector',
        price: 14.99,
        emoji: '🛡️',
        description: 'Tempered glass protection',
        rating: '⭐⭐⭐⭐'
    },
    {
        id: 8,
        name: 'Portable Charger',
        price: 44.99,
        emoji: '🔋',
        description: '20000mAh capacity, fast charging',
        rating: '⭐⭐⭐⭐⭐'
    }
];

// Shopping Cart
let cart = [];

// Load Products on Page Load
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    loadCartFromStorage();
});

// Load and Display Products
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            ${product.emoji}
        </div>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-rating">${product.rating}</div>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    return card;
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartCount();
    displayCart();
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Display Cart Modal
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #636e72;">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        html += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong>
                    <div style="color: #636e72; font-size: 0.9rem;">
                        Qty: <input type="number" value="${item.quantity}" min="1" 
                               onchange="updateQuantity(${item.id}, this.value)" 
                               style="width: 50px; padding: 5px;">
                    </div>
                </div>
                <div style="text-align: right;">
                    <div>$${itemTotal.toFixed(2)}</div>
                    <button onclick="removeFromCart(${item.id})" 
                            style="background-color: #ff7675; color: white; border: none; 
                                   padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 0.8rem;">
                        Remove
                    </button>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    cartTotal.textContent = total.toFixed(2);
}

// Update Quantity
function updateQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(quantity));
        saveCartToStorage();
        displayCart();
        updateCartCount();
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart Icon Click
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        displayCart();
        document.getElementById('cartModal').style.display = 'block';
    });
    
    // Close Modal
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        document.getElementById('cartModal').style.display = 'none';
    });
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactForm();
    });
    
    // Close Modal When Clicking Outside
    window.addEventListener('click', function(e) {
        const modal = document.getElementById('cartModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Handle Contact Form Submission
function handleContactForm() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    showNotification('Message sent successfully! We\'ll get back to you soon.');
    form.reset();
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #00b894;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-in-out;
    `;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Save Cart to Local Storage
function saveCartToStorage() {
    localStorage.setItem('outOfBoundsCart', JSON.stringify(cart));
}

// Load Cart from Local Storage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('outOfBoundsCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
