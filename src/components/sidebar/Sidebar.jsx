import React from "react";
import "./sidebar.css";
import {
  dashBoardLinks,
  dashBoardLinks2,
  dashBoardLinks3,
  dashBoardLinks4,
} from "../../contants";
import SideMenu from "./SideMenu";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <SideMenu dashBoardLinks={dashBoardLinks} />
          <SideMenu dashBoardLinks={dashBoardLinks2} />
          <SideMenu dashBoardLinks={dashBoardLinks3} />
          <SideMenu dashBoardLinks={dashBoardLinks4} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
