const products = [
    { name: "Laptop", category: "Electronics", price: 1200, quantity: 5, rating: 4.8 },
    { name: "Phone", category: "Electronics", price: 800, quantity: 10, rating: 4.5 },
    { name: "Book", category: "Books", price: 20, quantity: 50, rating: 4.9 },
    { name: "Headphones", category: "Electronics", price: 100, quantity: 15, rating: 4.3 },
    { name: "Notebook", category: "Books", price: 5, quantity: 100, rating: 4.2 }
];

const productNames = products.map(product => product.name);
console.log("Product names:", productNames);

const categoryProducts = products.filter(product => product.category === "Electronics");
console.log("Electronics:", categoryProducts);

const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log("Sorted by price:", sortedProducts);

const totalValue = products.reduce((total, product) => {
    return total + product.price * product.quantity;
}, 0);
console.log("Total value:", totalValue);

const discountedProducts = products.map(product => {
    return {
        ...product,
        price: product.price * 0.9
    };
});
console.log("Discounted products:", discountedProducts);

const popularProduct = products.reduce((best, product) => {
    if (product.rating > best.rating) {
        return product;
    }
    else {
        return best;
    }
});
console.log("Most popular product:", popularProduct);