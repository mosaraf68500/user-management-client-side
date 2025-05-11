import React, { use } from 'react';


const User = ({UserPromise}) => {
    const users=use(UserPromise);
    console.log(users);

    const handleAddUser=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        console.log(name, email)
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