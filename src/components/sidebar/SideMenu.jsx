import React from "react";

function SideMenu({ dashBoardLinks }) {
  console.log(dashBoardLinks);
  return (
    <>
      <h2 className="sidebarTitle">{dashBoardLinks.dashboard}</h2>
      <ul className="sidebarList">
        {dashBoardLinks.links.map((dash) => {
          return (
            <li
              className={`sidebarListItem ${dash.id === 1 ? "active" : "none"}`}
              key={dash.id}
            >
              {<dash.icons className="sidebarIcon" />} {dash.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SideMenu;
