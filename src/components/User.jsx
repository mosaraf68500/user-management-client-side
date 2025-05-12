import React, { use, useState } from "react";
import UserCard from "./UserCard";

const User = ({ UserPromise }) => {
  const initialUsers = use(UserPromise);
//   console.log(users);
  const [users,setUser]=useState(initialUsers)

  const handleAddUser = (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const username = target.username.value;
    const email = target.email.value;
    const phone = target.phone.value;
    const website = target.website.value;

    const user = { name, username, email, phone, website };
    console.log(user);


    fetch("http://localhost:4000/users",{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const newUser=[...users,data];
        setUser(newUser);
    })


  };
  return (
    <div className="w-11/12 mx-auto">
      <div className=" flex flex-col justify-center m-11/12 mx-auto ">
        <form onSubmit={handleAddUser}>
          <div className="">
            <legend className="fieldset-legend">Name</legend>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Type here"
            />
          </div>
          <div className="">
            <legend className="fieldset-legend">UserName</legend>
            <input
              name="username"
              type="text"
              className="input"
              placeholder="Type here"
            />
          </div>
          <div className="">
            <legend className="fieldset-legend">Email</legend>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Type here"
            />
          </div>
          <div className="">
            <legend className="fieldset-legend">Phone</legend>
            <input
              name="phone"
              type="text"
              className="input"
              placeholder="Type here"
            />
          </div>
          <div className="">
            <legend className="fieldset-legend">website</legend>
            <input
              name="website"
              type="text"
              className="input"
              placeholder="Type here"
            />
          </div>{" "}
          <br />
          <div className=" cursor-pointer">
            {/* <legend className="fieldset-legend">website</legend> */}
            <input
              name="website"
              type="submit"
              value="addUser"
              className="input cursor-pointer"
              placeholder="Type here"
            />
          </div>
        </form>
      </div>
      <div className="grid grid-cols-3 mx-auto w-11/12 my-19 gap-8">
        {users.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default User;
