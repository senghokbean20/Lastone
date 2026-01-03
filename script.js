// 1. Initialize the cart count
let cartItemCount = 0;

// 2. Select the necessary elements using the new IDs
const addToCartButtons = document.querySelectorAll('.product-card .btn');
const cartIcon = document.getElementById('cart-icon'); 
const cartCountBadge = document.getElementById('cart-count-badge');

// Function to update the cart icon display
function updateCartIcon() {
    // Update the text in the badge
    cartCountBadge.textContent = cartItemCount;

    // Show or hide the badge based on the count
    if (cartItemCount > 0) {
        cartCountBadge.style.display = 'inline';
    } else {
        cartCountBadge.style.display = 'none';
    }
    
    // Optional: Visual 'ping' when an item is added
    if (cartItemCount > 0) {
        cartIcon.style.color = 'rgb(249, 144, 162)'; // Temporarily pink
        setTimeout(() => {
            cartIcon.style.color = 'black'; // Back to black
        }, 300); 
    }
}

// 3. Add event listeners to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Increment the cart count
        cartItemCount++;

        // Update the cart icon display
        updateCartIcon();

        // Optional: Simple log feedback
        const productName = this.closest('.product-card').querySelector('.product-name').textContent;
        console.log(`${productName} added! New cart total: ${cartItemCount}`);
    });
});

// 4. Add a click listener to the cart icon (for navigation/viewing)
if (cartIcon) {
    cartIcon.style.cursor = 'pointer'; 
    cartIcon.addEventListener('click', function() {
        if (cartItemCount > 0) {
            alert(`You have ${cartItemCount} item(s) in your cart. Proceeding to checkout...`);
        } else {
            alert('Your shopping bag is empty.');
        }
    });
}

// Make sure to include this JavaScript code using a <script src="script.js"></script> 
// tag at the bottom of your HTML body.



