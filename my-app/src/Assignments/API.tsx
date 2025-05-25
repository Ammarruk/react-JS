import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

type Product = {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  description?: string; 
};

const RECORDS_PER_PAGE = 8;

const ProductListPagination = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 
  const fetchPosts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();

      const productsData: Product[] = data.products.map((product: any) => ({
        id: product.id,
        name: product.title,
        image: product.thumbnail,
        difficulty: product.category,
        description: product.description, 
      }));

      setProducts(productsData);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / RECORDS_PER_PAGE);
  const startIndex = (currentPage - 1) * RECORDS_PER_PAGE;
  const endIndex = startIndex + RECORDS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
        <div className="spinner-border text-danger" role="status" style={{ width: "4rem", height: "4rem" }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center"><h1 className="text-danger fw-bold">Error: {error}</h1></div>;
  }

  return (
    <div className="container">
      <h1 className="text-danger fw-bold mb-4 text-center">Products</h1>
      <div className="row g-4">
        {paginatedProducts.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card h-100 shadow rounded-3">
              <img
                alt={product.name}
                src={product.image}
                className="card-img-top rounded-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-primary">{product.name}</h5>
                <p className="card-text text-muted">Difficulty: <span className="fw-semibold">{product.difficulty}</span></p>
              </div>
              <div className="card-footer bg-light border-top text-center">
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => setSelectedProduct(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          {pageNumbers.map((pageNumber) => (
            <li
              className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
              key={pageNumber}
            >
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPage(pageNumber);
                  window.scrollTo({ top: 0 });
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Modal */}
      {selectedProduct && (
        <>
          <div className="modal show d-block" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProduct.name}</h5>
                  <button type="button" className="btn-close" onClick={() => setSelectedProduct(null)}></button>
                </div>
                <div className="modal-body">
                  <img
                    src={selectedProduct.image}
                    className="img-fluid mb-3"
                    alt={selectedProduct.name}
                  />
                  <p><strong>Difficulty:</strong> {selectedProduct.difficulty}</p>
                  <p><strong>Description:</strong> {selectedProduct.description || "No description available."}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setSelectedProduct(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop show"></div>
        </>
      )}
    </div>
  );
};

export default ProductListPagination;
