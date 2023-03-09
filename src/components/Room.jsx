import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {db} from "../firebase";
import {query, collection, onSnapshot} from "firebase/firestore";
import { UserAuth } from '../context/AuthContext';
import { Layout, Menu} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Checkin from './CheckIn'
import Checkout from './CheckOut'


const { Header, Content, Footer } = Layout;

const Room = () => {

//Auth log out
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  const {id} = useParams();
  const [rooms, setData] = useState([]);
  const [room, setRoom] = useState({});
 
  useEffect(() =>{
  const q = query(collection(db, 'Rooms'));
  const unsubscribe = onSnapshot(q, queryCollection  => {
    let arr =[];
    queryCollection.forEach(doc => {
      arr.push({...doc.data(), id: doc.id});
    });
    console.log(arr);
   
    setData(arr);
  })
}, []);

useEffect(() =>{
  const currentRoom = rooms.find(item => item.id === id)
  setRoom (currentRoom);

}, [rooms, id])

  return (
    <>
   
    <Layout>
       
    <Header>
    <div className="header">
      <a href="#default" className="logo">CompanyLogo</a>
      <div className="header-right">
        <a 
          href="#contact"
          onClick={handleLogout} 
        >
          <UserOutlined />Log out 
        </a>
        
      </div>
    </div>
      < Menu
        theme="dark"
        mode="horizontal" 
      />
      
    </Header>

    <Content className="content-layout" >
          <div className='content-btn'>
           <Checkin />
           <Checkout /> 
          </div>
          <div className='content-wrapper'>
          <div className='wrapper-image'>
            <img className="article-img" src={room && room.gallery} alt="Card cap" />
          </div>
          <div className='wrapper-content'>
            <h2>Room{room && room.id}</h2>
            <p>Type:{room && room.id}</p>
            <p>Occupancy:{room && room.id}</p>
            <p>Price:{room && room.id}</p>
            <p>Guest:{room && room.id}</p>
            <p>Features{room && room.id}</p>
          </div> 
      </div>
      <div className='content-descr'>
        <p>Description:</p>
      </div>
    </Content>

    <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2023 Created by Mari
      </Footer>
      
        
     
    </Layout>
     </> 
  );
}

export default Room;