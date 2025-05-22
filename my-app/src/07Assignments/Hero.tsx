const Hero = () => {
  return (
    <section
      id="home"
      className="hero position-relative d-flex align-items-center justify-content-center text-center text-white"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      {/* Blurred Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524561506982-601111bed7a6?q=80&w=1470&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-4 fw-bold">Welcome to Our Website</h1>
        <p className="lead">We provide awesome services and creative solutions.</p>
        <a href="#services" className="btn btn-primary btn-lg mt-3">
          Explore More
        </a>
      </div>
    </section>
  );
};

export default Hero;
