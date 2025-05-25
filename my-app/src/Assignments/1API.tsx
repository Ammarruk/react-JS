import { useEffect,useState } from "react";

type UserType ={
    id:number
    firstName:string
    age:number
    gender:string
    email:string
    phone:number
}
function User (){
    const [posts,setPosts]= useState <UserType[]>();

    const fetchPost =async () =>{
        const response = await fetch("https://dummyjson.com/users")
        const json = await response.json();
        const data: UserType[] = json.users;
        setPosts(data);
    };
    useEffect(() => {
    fetchPost();
  }, []); 
    return (
    <div>
        <h1 className="text-center bg-black text-white p-3">This is user component</h1>
      {posts?.map((user) => (
        <div className="my-5 bg-success text-white p-3 " key={user.id}>
          <h3>Id - {user.id}</h3>
          <h4>{user.firstName}</h4>
          <h6>{user.age}</h6>
          <h6>{user.gender}</h6>
          <h6>{user.email}</h6>
          <h6>{user.phone}</h6>
        </div>
      ))}

    </div>
  );
}
export default User;
