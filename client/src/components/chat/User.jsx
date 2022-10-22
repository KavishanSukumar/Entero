import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const API_URL_USER = "http://localhost:4000/api/user/";
const API_URL_GETNEWMESSAGE = "http://localhost:4000/api/message/";

function User({ conversation, userId }) {
  const [sender, setSender] = useState(
    conversation.sender_id !== userId
      ? conversation.sender_id
      : conversation.receiver_id
  );
  const [user, setUser] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    getUser();
    getMessageCount();
    const interval = setInterval(() => {
      getMessageCount();
    }, 6000);
  }, [userId]);

  const getUser = async () => {
    const user = await axios.post(API_URL_USER, {
      userid: sender,
    });
    setUser(user.data);
  };

  const getMessageCount = async () => {
    const res = await axios.get(
      API_URL_GETNEWMESSAGE + conversation.conversation_id
    );
    const messages = res.data;
    var temp = 0;
    messages.map((e) => {
      if (!e.status && e.sender_id != userId) {
        temp++;
      }
    });
    setCount(temp);
  };

  return (
    <div className="grid grid-cols-6 p-3 m-3 border-b-2 hover:bg-slate-200 cursor-pointer">
      <div>
        <img
          className="inline-block h-14 w-14 rounded-full ring-2 ring-gray-500"
          src={user?.image}
          alt=""
        />
      </div>
      <div className="col-span-5 flex flex-col justify-center">
        <div className="flex flex=row">
          <div>
            <p className="text-lg font-medium capitalize truncate">
              {user?.name}
            </p>
          </div>
          <div className="flex justify-center align-middle ml-2 ">
            <p className="text-center text-amber-700 font-bold ">
              {count > 0 ? count : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
