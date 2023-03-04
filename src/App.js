import React from 'react';
import Signin from './components/SignIn';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux';

function App() {
 
  const userAct = useSelector (store => store.users.user);
  const dispatch = useDispatch();

  const handleClick = () =>{
    dispatch({type: "CHANGE_TEXT", payload: "Hello"})
  }

  return (
    <div className="App">
      <h1 className="text-center">
                Firebase Auth & Context
      </h1>
      <p onClick={()=> {handleClick()}}>fghj</p>
      <p>{userAct}</p>

      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
      
      
    </div>
  );
}

export default App;
