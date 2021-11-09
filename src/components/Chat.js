import React, { useState, useEffect } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Message from "./Message";
import ChatInput from "./ChatInput";
import db from "../firebase";
const Chat = () => {
  /* accessing the parameters of the current route i.e pulling the name of room id from url */
  const { roomId } = useParams();

  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  //when a channel is selected with a given id get its details:-
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data())); //gets the data present in a roomId
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setRoomMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, [roomId]); //update this code when the roomId(dependency) changes

  console.log("message = ", roomMessages);

  return (
    <div className="chat">
      {/* <h2>you are in the {roomId} room</h2> */}
      <div className="chat__header">
        <div className="chat__headerleft">
          <h4 className="chat__channelname">
            <strong>#{roomDetails?.name}</strong>{" "}
            {/*?=optional chaining;acts like an instant try catch */}
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerright">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userimage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userimage={userimage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
};

export default Chat;
