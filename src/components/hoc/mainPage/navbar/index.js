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
      <>
        <div className="show">
          <div className="deskNav ">
            <ul>
              <li>
                <Link to="/">
                  
                </Link>
              </li>
              <li style={{ marginRight: "57px" }}>
                <NavLink to="/">خانه</NavLink>
              </li>
              <li className="dropdown">
                <NavLink to="/categories" className="dropbtn">
                  دسته بندی‌ها 
                </NavLink>
                <div className="dropdown-content">
                  <a href="#"> طراحی پوستر</a>
                  <a href="#"> اینفوگرافی</a>
                  <a href="#"> تیزر و کلبپ</a>
                </div>
              </li>
              <li>
                <NavLink to="/blogs">راهنما</NavLink>
              </li>
            </ul>
            {isLogin ? (
              <UserBox />
            ) : (
              <NavLink to="/login">
                <Button type="text">
                  <UserOutlined style={{ fontSize: "22px" }} />

                  <span style={{ marginRight: "4px" }}>ورود / ثبت نا2م</span>
                </Button>
              </NavLink>
            )}
          </div>
        </div>

        <nav className="mobile">
          <div className="navbar">
            <div className="container nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>
              <Link to="/">
             
              </Link>

              <div className="logo">
                {isLogin ? (
                  <div className="mobileInfo">
                    <Avatar icon={<UserOutlined />} size="small" />

                    <span className="userInfo">
                      <span>
                        {userName.length < 13
                          ? userName
                          : userName.substring(0, 13) + "..."}
                      </span>
                    </span>
                  </div>
                ) : (
                  <NavLink to="/login">
                    <Button
                      type="text"
                      style={{ width: "48px", height: "48px" }}
                    >
                      <UserOutlined style={{ fontSize: "22px" }} />
                    </Button>
                  </NavLink>
                )}
              </div>
              <div className="menu-items">
                <li>{userName}</li>
                <li>
                  <NavLink to="/">
                    <HomeOutlined className="svg-icon" />
                    خانه
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/category">
                    دسته بندی‌ها
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard">
                     پروفایل
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/info">
                    راهنما
                  </NavLink>
                </li>
                <li>
                  {isLogin ? (
                    <NavLink to="/logout">
                      خروج
                    </NavLink>
                  ) : (
                    <NavLink to="/login">
                      ورود
                    </NavLink>
                  )}
                </li>
              </div>
            </div>
          </div>
        </nav>
      </>
    </StyledContainer>
  );
};

export default Navbar;
