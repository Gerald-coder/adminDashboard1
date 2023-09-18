import React from "react";
import "./home.css";
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import { data } from "../../contants";

function Home() {
  return (
    <div className="home">
      <FeatureInfo />
      <Chart data={data} title="User Analytics" grid />
    </div>
  );
}

export default Home;
