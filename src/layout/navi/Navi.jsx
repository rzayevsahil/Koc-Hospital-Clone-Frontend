import "./navi.module.css";
import { Avatar, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import {MenuOutlined ,SearchOutlined } from '@ant-design/icons';

export default function Navi() {
    const [currentKey, setCurrentKey] = useState({ current: "" });
  const { Header } = Layout;
  const { current } = currentKey;
  const [theme, setTheme] = useState("light")

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrentKey({ current: e.key });
  };
  console.log("current : " + current + "currentKey : + " + currentKey);

  const changeTheme= value =>{
    setTheme(value?"dark":"light" )
  }
    return (
        <div>
             <Menu className="ant-menu"
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      theme={theme}
      style={{ lineHeight: '80px' }}
    >
      
      <Menu.Item key="0">
        {" "}
       <Link to="/"> <Avatar size="large" shape="square"
         src={"../../../assets/images/kocuniversitesi.jpg"}
        ></Avatar></Link>
       
       
      </Menu.Item>
    
     
<div style={{display:"flex",position:"relative",marginLeft:"550px"}}>
      <Menu.Item key="1"> <NavLink
          to="/categories"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Bölümlerimiz
        </NavLink></Menu.Item>
      <Menu.Item key="2">
        {" "}
        <NavLink
          to="/doctors"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          Doctorlarımız
        </NavLink>
      </Menu.Item>
      <Menu.Item key="3"> <NavLink
          to="/contacts"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
         Bize Ulaşın
        </NavLink></Menu.Item>
      <Menu.Item key="4" style={{float:"right"}}>Kurumsal</Menu.Item>

    
      
      </div>
      <div style={{float:"right",display:"flex"}}>
      <Menu.Item key="6" ><SearchOutlined /> </Menu.Item>
      <Menu.Item key="5" ><MenuOutlined /> </Menu.Item>
      </div>
      {/* <div>
      // <Menu.Item key="5" ><Switch onChange={changeTheme} /> Change Theme </Menu.Item> 
      </div> */}
      
    </Menu>
        </div>
    )
}
