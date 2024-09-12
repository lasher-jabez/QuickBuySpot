// Function to display products from local storage
function displayProducts() {
    const productList = document.getElementById('product-list');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    productList.innerHTML = ''; // Clear existing product list
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="${product.link}" target="_blank">Buy Now</a>
            </div>
        `;
    });
}

// Function to add a new product
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const image = document.getElementById('product-image').value;
    const link = document.getElementById('product-link').value;

    const newProduct = {
        name: name,
        description: description,
        image: image,
        link: link
    };

    // Get existing products from local storage or create an empty array
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Add the new product to the array
    products.push(newProduct);

    // Save updated product list back to local storage
    localStorage.setItem('products', JSON.stringify(products));

    // Reset the form
    document.getElementById('product-form').reset();

    // Display the updated product list
    displayProducts();
});

// Load and display products when the page loads
window.onload = function() {
    displayProducts();
};
