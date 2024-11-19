let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const productName = product.getAttribute('data-name');
        const productPrice = product.getAttribute('data-price');

        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;

        alert(`${productName} has been added to your cart!`);
    });
});