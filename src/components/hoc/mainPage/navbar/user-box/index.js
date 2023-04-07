import {Avatar } from "antd";
import React from "react";
import userAvatar from "../../../../../assets/images/useravatar.png"

function UserBox (props) {
 
  return(
        <Avatar src={userAvatar} size={50} />
)};

export default UserBox;

