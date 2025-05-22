

function About() {
  return (
    <section
      id="about"
      className="position-relative text-white d-flex align-items-center"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      {/* Blurred Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url('https://images.unsplash.com/photo-1524561506982-601111bed7a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: 1,
        }}
      ></div>

      {/* Foreground Content */}
      <div
        className="container text-center"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <h2 className="fw-bold text-danger mb-3">About Us</h2>
        <p className="text-danger fs-5 mb-3">
          We are a passionate team of designers, developers, and thinkers, building top-notch solutions for the web.
        </p>
        <p className="text-danger fs-5">
          Our mission is to empower businesses with modern, efficient, and stunning digital experiences.
        </p>
        <a href="1Contact" className="btn btn-outline-light mt-3">Contact Us</a>
      </div>
    </section>
  );
}

export default About;
