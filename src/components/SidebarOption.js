import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  //programatically change the url
  const history = useHistory(); //The useHistory hook gives you access to the history instance that you may use to navigate.
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`); //navigate to the page with the given id
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter a Channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/*(if this part is true) && (this part will execute) */}
      {Icon && <Icon className="sidebarOption__icon" />}{" "}
      {/*if an icon is passed then render the icon component */}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
