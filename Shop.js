const cartItems = [];

function addItem(button) {
    // Get product information
    const product = button.parentNode;
    const title = product.querySelector("h3").textContent;
    const price = parseFloat(product.querySelector("p").textContent.split("$")[1]);

    // Create a cart item object
    const cartItem = {
        title,
        price,
        quantity: 1
    };

    // Add item to cart
    cartItems.push(cartItem);

    // Update cart display
    updateCart();
}

function updateCart() {
    // Clear existing cart items
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.innerHTML = "";

    // Add each item from the cart
    cartItems.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("cart-item");

        const titleElement = document.createElement("h3");
        titleElement.textContent = item.title;

        const priceElement = document.createElement("p");
        priceElement.textContent = `Price: $${item.price}`;

        const quantityElement = document.createElement("p");
        quantityElement.textContent = `Quantity: ${item.quantity}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            // Remove item from cart
            cartItems.splice(cartItems.indexOf(item), 1);

            // Update cart display
            updateCart();
        });

        cartItemElement.appendChild(titleElement);
        cartItemElement.appendChild(priceElement);
        cartItemElement.appendChild(quantityElement);
        cartItemElement.appendChild(removeButton);

        cartContainer.appendChild(cartItemElement);
    });

    // Update total price
    updateTotalPrice();
}

function updateTotalPrice() {
    // Calculate total price
    let totalPrice = 0;
    cartItems.forEach(item => totalPrice += item.price * item.quantity);

    // Update display
    document.querySelector(".total-price").textContent = `Total Price: $${totalPrice}`;
}

function checkout() {
    // Implement your checkout logic here
    // For example, you could redirect the user to a checkout page or send the cart data to a server
    alert("Secure checkout!");
}
