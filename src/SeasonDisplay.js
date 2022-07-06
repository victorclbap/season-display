import React from "react";
import "./SeasonDisplay.css";

const GetSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },

  winter: {
    text: "Burr, it's chilly",
    iconName: "snowflake",
  },
};

const SeasonDisplay = (props) => {
  const season = GetSeason(props.lat, new Date().getMonth());

  const { iconName, text } = SeasonConfig[season];

  return (
    <div className={`container  ${season}`}>
      <i className={`left-side massive ${iconName} icon`} />
      <h1 className={season}>{text}</h1>
      <i className={`right-side massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
