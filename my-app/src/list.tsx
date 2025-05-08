function ProductList() {
  const products = [
    { id: 1, name: "Earphone", description: "Sony headphones are the best", price: 5999 },
    { id: 2, name: "Laptop", description: "HP laptop is the best laptop in the world", price: 79999 },
    { id: 3, name: "Smartwatch", description: "Latest smartwatch with health tracking", price: 19999 },
  ];

  return (
    <div className="container mt-4">
        <h1 className="text-center bg-dark">Our Products </h1>
      <div className="list-group">
        {products.map((product) => (
          <div key={product.id} className="list-group-item list-group-item-action">
            <h4 className="mb-2 fw-bold">{product.name}</h4> 
            <p className="mb-2 text-secondary">{product.description}</p>
            <p className="mb-0 text-success fw-semibold">Rps {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

