import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import SendIcon from "@mui/icons-material/Send";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");

  function sendMessage(e) {
    // to prevent re-rendering
    e.preventDefault();

    //to get id and icon of the user
    const { uid, photoURL } = auth.currentUser;

    // to send data to firebase
    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    //to clear the entered message
    setMessage("");


    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
        {/* send message when enter is pressed */}
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-3px",
            }}
            placeholder="Message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;