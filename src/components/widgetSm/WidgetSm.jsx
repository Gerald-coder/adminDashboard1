import React from "react";
import "./widgetSm.css";
import { widgetSmallItems } from "../../contants";
import VisibilityIcon from "@mui/icons-material/Visibility";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmallTitle">{widgetSmallItems.topTitle}</span>
      <ul className="widgetSmList">
        {widgetSmallItems.properties.map((item) => {
          console.log(item);
          return (
            <li key={item.id} className="widgetSmListItem">
              <img src={item.photo} alt={item.alt} className="widgetSmImg" />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{item.username}</span>
                <span className="widgetSmTitle">{item.title}</span>
              </div>
              <button className="widgetSmBTN">
                <VisibilityIcon className="btndisplay" />
                display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WidgetSm;
