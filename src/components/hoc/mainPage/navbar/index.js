import { NavLink , Link } from "react-router-dom";
import { Button } from "../../../uiKit";
import { StyledContainer } from "./style";
import { HomeOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useEffect, useState } from "react";
import UserBox from "./user-box";

const Navbar = ({ children }) => {
  const [isLogin, setIslogin] = useState(true);
  const [userName, setuserName] = useState("کاربر اصلی");
  useEffect(() => {
    let token = localStorage.getItem("userCode");
    if (token) {
      setIslogin(true);
    }
  }, []);
  return (
    <StyledContainer>
      <h1>
        welcome
      </h1>
      <UserBox />
    </StyledContainer>
  );
};

export default Navbar;
