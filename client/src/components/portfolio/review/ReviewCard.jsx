import React from "react";

function ReviewCard(props) {
  return (
    <div className="flex flex-col m-3 shadow-inner rounded-lg">
      
      <div className="flex flex-row m-3">
        <div className="m-3">
          <img
            class="h-16 w-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
        </div>
        <div className="flex flex-col m-3">
          <div className="font-sans text-2xl">Sukumar Kavishan</div>
          <div>{props.data}</div>
        </div>
      </div>
      <div className="m-3 font-serif italic">
        I am so delighted about the services, all the refreshment items are very yummy. I recomment the refreshment price which is worth for the paid price.
      </div>
    </div>
  );
}

export default ReviewCard;
