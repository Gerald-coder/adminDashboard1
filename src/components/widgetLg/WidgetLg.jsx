import React from "react";
import "./widgetLg.css";
import { widgetLgTable } from "../../contants";

const Button = ({ item }) => {
  // console.log(item);
  return (
    <button
      className={`widgetLgButton ${item.status} ${
        item.status === "Declined"
          ? "red"
          : item.status === "Pending"
          ? "yellow"
          : "normal"
      }`}
    >
      {item.status}
    </button>
  );
};
function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="wigetLgTitle"> Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <>
          {widgetLgTable.map((item) => {
            return (
              <tr key={item.name}>
                <td className="widgetLgUser">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="widgetLgImg"
                  />
                  <span className="widgetLgName">{item.name}</span>
                </td>
                <td className="widgetLgDate">{item.date}</td>
                <td className="widgetLgAmount">{item.Amount}</td>
                <td className="widgetLgStatus">
                  <Button item={item} />
                </td>
              </tr>
            );
          })}
        </>
      </table>
    </div>
  );
}

export default WidgetLg;
