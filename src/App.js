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
  const usersReducer = useSelector (store => store.users.user);

  const roomsReducer = useSelector (store => store.rooms.room);
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
            <ProtectedRoute>
                  <Main />
            </ProtectedRoute>
          }
          />
           <Route
            path='/room/:id'
            element={
              <ProtectedRoute>
                <Room />
              </ProtectedRoute>
            }
          /> 
        </Routes>
      </AuthContextProvider> 
    </div>
  );
}
export default App;
