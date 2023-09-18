import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./featureInfo.css";

function FeatureInfo() {
  return (
    <div className="feature">
      <div className="featureItem">
        <span className="featureTitle">Revenue</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">#500,000</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">#450,000</span>
          <span className="featuredMoneyRate">
            -18.4
            <ArrowDownwardIcon className="featureIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Cost</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">#380,000</span>
          <span className="featuredMoneyRate">
            -7.4
            <ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeatureInfo;
