import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import Person3Icon from "@mui/icons-material/Person3";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">GerryDev</span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNoneIcon className="notification" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <LanguageIcon className="notification" />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topBarIconContainer">
            <SettingsIcon className="notification" />
          </div>
          {/* <img
            src="../../public/assests/profile.jpg"
            alt="my photo"
            className="avatar"
          /> */}
          <div className="topBarIconContainer">
            <Person3Icon className="notification" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Topbar;
