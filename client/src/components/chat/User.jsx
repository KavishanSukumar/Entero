import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const API_URL_USER = "http://localhost:4000/api/user/";

function User({ conversation, userId }) {
  const [sender, setSender] = useState(
    conversation.sender_id !== userId
      ? conversation.sender_id
      : conversation.receiver_id
  );
  const [user, setUser] = useState();
  useEffect(() => {
    getUser();
  }, [userId]);

  const getUser = async () => {
    const user = await axios.post(API_URL_USER, {
      userid: sender,
    });
    setUser(user.data);
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
        <p className="text-lg font-medium capitalize truncate">{user?.name}</p>
      </div>
    </div>
  );
}

export default User;
