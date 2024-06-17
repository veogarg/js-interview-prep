document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById('productList');
    const sortOrderSelect = document.getElementById('sortOrder');

    // Function to fetch and display products
    function fetchProducts(sortOrder = 'asc') {
        fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`)
            .then(response => response.json())
            .then(products => {
                displayProducts(products);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                productList.innerHTML = `<p>Error fetching products. Please try again later.</p>`;
            });
    }

    // Function to display products in the DOM
    function displayProducts(products) {
        productList.innerHTML = '';
        products.sort((a, b) => sortOrderSelect.value === 'asc' ? a.price - b.price : b.price - a.price);
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <div class="product-details">
                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">$${product.price}</p>
                </div>
            `;
            productList.appendChild(productElement);
        });
    }

    // Event listener for sort order change
    sortOrderSelect.addEventListener('change', () => {
        fetchProducts(sortOrderSelect.value);
    });

    // Initial fetch
    fetchProducts();
});
