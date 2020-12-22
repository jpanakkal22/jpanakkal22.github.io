import React from "react";
import Image from 'react-bootstrap/Image';
import pic from "./profile-picture.jpg";
import "./style.css";

function ProfilePic() {
    return (
        <Image src={pic} alt="Profile Picture" thumbnail id="profPic" />       
    )
}

export default ProfilePic;