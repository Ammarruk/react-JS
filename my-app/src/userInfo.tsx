function UserInfo() {
  const User = {
      course: "Frontend development course",
      summary: "We offer modern and responsive frontend development services using the latest technologies like React, HTML, CSS, and JavaScript",
      courseImageUrl: "https://images.pexels.com/photos/16129705/pexels-photo-16129705/free-photo-of-man-sitting-at-desk-working-on-computers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      portfolioUrl: "https://ammarruk.github.io/My-portfloio/"
  };

  return (
      <>
         <header>
         <div style={{
              backgroundColor: '#17a2b8', 
              color: 'white',
              padding: '15px',
              textAlign: 'center',
              fontSize: '24px'
          }}>
              Welcome to our course
          </div>
         </header>
         <section>
         <div className="container mt-5">
              <div className="card mx-auto" style={{ maxWidth: "400px" }}>
                  <img
                      src={User.courseImageUrl}
                      alt="Course"
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                      <h5 className="card-title bg-primary text-white p-2 rounded">{User.course}</h5>
                      <p className="card-text">{User.summary}</p>
                      <a href={User.portfolioUrl} className="btn btn-primary w-100">Visit My Website</a>
                  </div>
              </div>
          </div>
         </section>
          
      </>
  );
}

export default UserInfo;
