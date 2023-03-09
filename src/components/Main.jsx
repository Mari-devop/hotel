import React from "react";
import { Layout, Menu, Table, Button, Space, Checkbox } from "antd";
import { useState, useEffect, useMemo } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";

import { getRooms } from "../redux/actions/roomsActions";
import { db } from "../firebase";
import { query, collection, onSnapshot } from "firebase/firestore";

const { Header, Content, Footer } = Layout;
const data = [];

export const ROOMS_TYPES = {
  STANDARD: "standard",
  DELUXE: "deluxe",
  SUITE: "suite",
};

export const ROOM_TYPE_LABEL = {
  [ROOMS_TYPES.STANDARD]: "Standard",
  [ROOMS_TYPES.DELUXE]: "Deluxe",
  [ROOMS_TYPES.SUITE]: "Suite",
};

export const ROOM_OCCUPANCY_LIST = [2, 3, 4];

const Main = () => {
  //Auth log out
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const getRoomsState = (state) => Object.values(state.rooms);
  const { rooms } = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  console.log(rooms);

  useEffect(() => {
    console.log("sdfghj");
    dispatch(getRooms());
  }, []);

  // const [rooms, setRooms] = useState([]);
  const [post, setPost] = useState({});

  useEffect(() => {
    const q = query(collection(db, "Rooms"));
    const unsubscribe = onSnapshot(q, (queryCollection) => {
      let arr = [];
      queryCollection.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      console.log(arr);

      // setRooms(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const [isChecked, setIsChecked] = useState(false);

  //filter for coloums
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const filteredRooms = useMemo(
    () =>
      isChecked
        ? rooms.filter((room) => room.isCheckedIn !== isChecked)
        : rooms,
    [rooms, isChecked]
  );
  const guestsOptions = useMemo(
    () =>
      !isChecked
        ? rooms
            .filter((room) => room.guest)
            .map((room) => ({ text: room.guest, value: room.guest }))
        : [],
    [rooms, isChecked]
  );

  const columns = [
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type) => <span>{ROOM_TYPE_LABEL[type]}</span>,
      filters: Object.values(ROOMS_TYPES).map((type) => ({
        text: ROOM_TYPE_LABEL[type],
        value: type,
      })),
      onFilter: (type, record) => record.type === type,
      filteredValue: filteredInfo.type || null,
    },
    {
      title: "Occupancy",
      dataIndex: "occupancy",
      key: "occupancy",
      filters: ROOM_OCCUPANCY_LIST.map((occupancy) => ({
        text: occupancy,
        value: occupancy,
      })),
      onFilter: (occupancy, record) => record.occupancy === occupancy,
      filteredValue: filteredInfo.occupancy || null,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <span>{text}$</span>,
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === "price" && sortedInfo.order,
    },
    {
      title: "Guest",
      dataIndex: "guest",
      key: "guest",
      filters: guestsOptions,
      onFilter: (text, record) => record.guest.startsWith(text),
      filteredValue: filteredInfo.guest || null,
    },
    {
      title: "",
      key: "operation",

      render: (text, record) => (
        <Button type="primary">
          <Link to={`/${record.id}`}>More information</Link>
        </Button>
      ),
    },
  ];

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleTableChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
    setIsChecked(false);
  };

  return (
    <Layout>
      <Header>
        <div className="header">
          <a href="#default" className="logo">
            CompanyLogo
          </a>
          <div className="header-right">
            <a href="#contact" onClick={handleLogout}>
              <UserOutlined />
              Log out
            </a>
          </div>
        </div>
        {/* < Menu
          theme="dark"
          mode="horizontal" 
        /> */}
      </Header>

      <Content className="content-layout">
        <div className="content-layout_wrapp">
          <>
            <Space
              style={{
                marginBottom: 16,
              }}
            >
              <Button onClick={clearAll}>Clear filters</Button>
              <Checkbox
                className="cbx-rooms"
                onChange={handleCheckboxChange}
                checked={isChecked}
              >
                Free rooms only
              </Checkbox>
            </Space>
            <Table
              columns={columns}
              dataSource={rooms}
              onChange={handleTableChange}
            />
          </>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Mari
      </Footer>
    </Layout>
  );
};

export default Main;
