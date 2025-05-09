function ProductList() {
  const products = [
    { id: 1, name: "Earphone", description: "Experience premium sound quality with Sony headphones, designed for comfort, style, and superior audio performance. Whether for music, calls, or gaming, they offer clear sound, deep bass, and noise cancellation features for an immersive listening experience.", price: 5999 },
    { id: 2, name: "Laptop", description: "HP laptops combine performance, reliability, and sleek design, making them ideal for work, study, and entertainment. With powerful processors, long battery life, and vibrant displays, HP offers a smooth computing experience for every need.", price: 79999 },
    { id: 3, name: "Smartwatch", description: "The Apple Watch blends cutting-edge technology with elegant design, offering health tracking, fitness features, and seamless connectivity. Stay updated, monitor your health, and control your devices—all from your wrist.", price: 19999 },
  ];

  return (
    <div className="container mt-4">
        <h1 className="text-center bg-dark">Our Products </h1>
      <div className="list-group">
        {products.map((product) => (
          <div key={product.id} className="list-group-item list-group-item-action">
            <h4 className="mb-2 fw-bold">{product.name}</h4> 
            <p className="mb-2 text-secondary">{product.description}</p>
            <p className="mb-0 text-success fw-semibold">Rps{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

