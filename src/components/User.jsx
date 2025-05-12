import React, { use, useState } from 'react';


const User = ({UserPromise}) => {
    const initialUsers=use(UserPromise);
    // console.log(initialUsers);
    const [users,setUsers]=useState(initialUsers);

    const handleAddUser=e=>{
        e.preventDefault();

        
        const name=e.target.name.value;
        const email=e.target.email.value;
        const user={name,email}
        console.log(user);

        fetch("http://localhost:3000/users",{
            method:'POST',
            headers:{
                 "Content-Type": "application/json",
            },
            body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log("after the post",data)
            const newUser=[...users,data];
            setUsers(newUser);
        }
    )
    }
    return (
        <div style={{textAlign:"center"}}>

            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" /> <br /> <br />
                <input type="email" name="email" id="" /> <br /> <br />
                <input type="submit" value="add user" />
            </form>
    
            <div >
                {
                    users.map(user=><p key={user.id}>{user.name}:{user.email}</p>)
                }
            </div>
        </div>
    );
};

export default User;