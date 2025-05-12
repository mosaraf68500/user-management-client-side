import React, { Suspense } from 'react';
import User from './components/User';
// import user from '../src/components/User'
const UserPromise=fetch("http://localhost:4000/").then(res=>res.json());

const App = () => {
  return (
    <div>
      <h1>users management server </h1>
      <div>
        <Suspense>
          <User UserPromise={UserPromise}></User>
        </Suspense>
      </div>
    </div>
  );
};

export default App;