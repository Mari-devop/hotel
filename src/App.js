import React from 'react';
import Signup from './components/Signup';
import Room from './components/Room';
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRooms } from './redux/actions/roomsActions';
import './App.css';


function App() {

  const getIsAuth = (state) => state.users.userAuth.isAuth;

  const getNotifData = (state) => state.notif;
  const isAuth = useSelector (getIsAuth);
  const notif = useSelector (getNotifData);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getRooms());
    },[]);
 
   

  return (
    <div className="App">
     
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/main' 
          element={
            //<ProtectedRoute>
                  <Main />
            //</ProtectedRoute>
          }
          />
           <Route
            path='/:id'
            element={
              //<ProtectedRoute>
                <Room />
              //</ProtectedRoute>
            }
          /> 
        </Routes>
      </AuthContextProvider> 
    </div>
  );
}
export default App;