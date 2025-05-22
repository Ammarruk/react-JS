const Contact = () => {
  return (
    <div className="container my-5">
      <div className="bg-light p-5 rounded shadow text-center">
        <h1 className="text-primary fw-bold display-6 mb-3">Contact Us</h1>
        <p className="text-secondary fs-5 mb-4">
          We'd love to hear from you! Reach out to us with your questions, feedback, or collaboration ideas.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6 text-start">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
