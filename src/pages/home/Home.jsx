import React from "react";
import "./home.css";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import { data } from "../../contants";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart data={data} title="User Analytics" grid />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
