import { Link } from "react-router-dom";

/* eslint-disable */

function SideMenu({ dashBoardLinks }) {
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
              {dash.name === "Users" ? (
                <>
                  <dash.icons className="sidebarIcon" />
                  <Link  to="/users">{dash.name}</Link>
                </>
              ) : (
                <>
                  <dash.icons className="sidebarIcon" /> {dash.name}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SideMenu;
