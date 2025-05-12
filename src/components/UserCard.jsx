import React from "react";

const UserCard = ({ user }) => {
  console.log(user);

  const { name,username, email,phone,website} = user;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {name}
            </h2>
            <h5>{username}</h5>
            <p>{email}</p>
            <p className="dark:text-gray-800">
              {phone}
            </p>
            <p>{website}</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
