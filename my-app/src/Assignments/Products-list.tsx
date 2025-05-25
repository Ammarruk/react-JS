import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function HotelMenu() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container my-4">
      {/* Card */}
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://via.placeholder.com/200x150" className="card-img-top" alt="Classic Margherita Pizza" />
        <div className="card-body">
          <h5 className="card-title">Classic Margherita Pizza</h5>
          <p className="card-text">Fresh mozzarella, tomatoes, and basil.</p>
          <button className="btn btn-success" onClick={() => setShowModal(true)}>
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex={-1} role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Classic Margherita Pizza</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <img src="https://via.placeholder.com/600x400" className="img-fluid mb-3" alt="Classic Margherita Pizza" />
                <p><strong>Ingredients:</strong> Fresh mozzarella, tomatoes, basil, olive oil, salt, thin crust.</p>
                <p><strong>Description:</strong> A classic Italian pizza with a thin and crispy base topped with melted mozzarella, ripe tomatoes, and fresh basil. Perfect for a light and flavorful meal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrop */}
      {showModal && <div className="modal-backdrop show"></div>}
    </div>
  );
}

export default HotelMenu;
