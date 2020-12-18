import React from "react";
import Image from 'react-bootstrap/Image';
import pic from "./profile-picture.jpg";
import "./style.css";

function ProfilePic() {
    return (
        <Image src={pic} thumbnail />
    )
}

export default ProfilePic;