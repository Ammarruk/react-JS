interface UserProps {
  course: string;
  summary: string;
  courseImageUrl: string;
  portfolioUrl: string;
}

function UserInfo() {
  const users: UserProps[] = [  
    {
      course: "Full stack web development ",
      summary: "We offer modern and responsive frontend development services using the latest technologies like React, HTML, CSS, and JavaScript.",
      courseImageUrl: "https://images.pexels.com/photos/16129705/pexels-photo-16129705/free-photo-of-man-sitting-at-desk-working-on-computers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      portfolioUrl: "https://ammarruk.github.io/My-portfloio/"
    },
    {
      course: "Python Programming Course",
      summary: "Master Python programming with hands-on projects, covering basics to advanced concepts like data analysis and web development.",
      courseImageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      portfolioUrl: "https://ammarruk.github.io/My-portfloio/"
    },
    {
      course: "Java Programming Course",
      summary: "Learn Java development from scratch including OOP, data structures, and application development for web and mobile.",
      courseImageUrl: "https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      portfolioUrl: "https://ammarruk.github.io/My-portfloio/"
    }
  ];

  return (
    <>
      <header>
        <div style={{
         backgroundColor: '#17a2b8',
      color: 'white',
      padding: '30px 20px', 
      margin: '20px',       
      textAlign: 'center',
      fontSize: '50px',
      fontWeight: 'bold',   
      borderRadius: '10px' 
    }}
  >
      
          Welcome to Ammar's React components
        </div>
      </header>
      <section>
        <div className="container mt-5 d-flex flex-wrap justify-content-center gap-4">
          {users.map((user, index) => (
            <div className="card" key={index} style={{ width: "350px" }}>
              <img
                src={user.courseImageUrl}
                alt={user.course}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{user.course}</h5>
                <p className="card-text">{user.summary}</p>
                <a href={user.portfolioUrl} className="btn btn-primary w-100">Visit My Website</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default UserInfo;
