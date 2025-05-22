
//Assignment 01
// Create a Product or a Course component and display info in a BS Card or any suitable Component

function UserInfo1(){
    const user = {     
        name:"Mohammed Ammar ",
        summary:"web developer web developer  web developer  web developer web developer   ",
        imageUrl:"https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        portfolio:"https://ammarruk.github.io/My-portfloio/",

    };
    return(
        <div className="card container col-10 md-5 ">
            <img src={user.imageUrl} className="card-img-top" style={{ width: "30", height:"10" }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.summary}</p>
                <a href={user.imageUrl} className="btn btn-primary">Visit my Portfolio</a>
          </div>
        </div>
    );

};
export default UserInfo1;