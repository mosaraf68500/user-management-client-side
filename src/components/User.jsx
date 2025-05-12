import React, { use } from "react";
import UserCard from "./UserCard";

const User = ({ UserPromise }) => {
  const users = use(UserPromise);
  console.log(users);
  return (
    <div className="w-11/12 mx-auto">
      <div className=" flex flex-col justify-center m-11/12 mx-auto ">
        <form action="">
          <div className="">
            <legend className="fieldset-legend">Name</legend>
            <input name="name" type="text" className="input" placeholder="Type here" />
          </div>
           <div className="">
            <legend className="fieldset-legend">UserName</legend>
            <input name="username" type="text" className="input" placeholder="Type here" />
          </div>

           <div className="">
            <legend className="fieldset-legend">Email</legend>
            <input name="email" type="email" className="input" placeholder="Type here" />
          </div>

           <div className="">
            <legend className="fieldset-legend">Phone</legend>
            <input  name="phone" type="text" className="input" placeholder="Type here" />
          </div>

           <div className="">
            <legend className="fieldset-legend">website</legend>
            <input name="website" type="text" className="input" placeholder="Type here" />
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
