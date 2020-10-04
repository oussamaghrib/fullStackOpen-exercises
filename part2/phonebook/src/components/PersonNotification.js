import React from "react";
import "./PersonNotification.css";

const PersonNotification = ({ notification, errMsg }) => {
  console.log(errMsg);
  if (!errMsg) {
    if (notification.length === 0) {
      return <></>;
    } else {
      return <h1 className="notification">{notification}</h1>;
    }
  } else {
    return <h1 className="err">{notification}</h1>;
  }
};

export default PersonNotification;
