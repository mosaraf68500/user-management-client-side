import React, { Suspense } from 'react';
import User from './components/User';

const UserPromise=fetch("http://localhost:3000/users").then(res=>res.json());

const App = () => {
  return (
    
   <div>
    <h1>user management client side</h1>

    <div>
      <Suspense>

        <User UserPromise={UserPromise}></User>
      </Suspense>
    </div>
   </div>
  );
};

export default App;