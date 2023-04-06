import { DownOutlined , UserOutlined,LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Space ,Avatar } from "antd";
import React from "react";
import { useNavigate, Link } from "react-router-dom";


const items = [
  {
    key: "1",
    type: "group",
  
    children: [
      {
        key: "1-1",
        label: "پروفایل",
        icon:<UserOutlined />,
        

      },
      {
        key: "1-2",
        label: "خروج",
        icon:<LogoutOutlined />

      },
    ],
  },


];

function UserBox (props) {
  const navigate = useNavigate();
  const logOutBtn =()=>{
    navigate('/logout');
  }
  const fullName=localStorage.getItem('fullName');
  const onClick = ({ key }) => {
     
    if(key==undefined)
    return
    if(key=='1-2')
    {
      logOutBtn()
    }
    else if(key=='1-1'){
      navigate('/dashboard');

    }

  };
  return(
  <Dropdown
    menu={{
      items,
      onClick,
    }}
    trigger={["click"]}
  >
    <Link onClick={onClick}>
      <Space>
        <Avatar icon={<UserOutlined />} />
        {fullName && fullName.length>1?
                <span className="userInfo">
                <span>{fullName} </span>
                
              </span>
        :
        <span className="userInfo">
        <span>کاربر اصلی</span>
        
      </span>
        }


        <DownOutlined />
      </Space>
    </Link>
  </Dropdown>
)};

export default UserBox;

