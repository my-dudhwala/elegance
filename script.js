fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('product-container');
    data.products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product';
      productCard.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
      `;
      container.appendChild(productCard);
    });
  });