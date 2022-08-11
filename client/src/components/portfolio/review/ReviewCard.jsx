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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo
        dolorem est quam officia tempora cumque quas velit nobis placeat. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Magni, eveniet.
        Nesciunt dignissimos harum ducimus suscipit laudantium provident error
        dolor sapiente deserunt quaerat! Sint magnam voluptatibus quod debitis
        maxime corrupti nobis, tempore obcaecati beatae minus, quae vel officiis
        iure nisi. Vero illo similique dolorem non sequi, sint qui illum cumque
        quas commodi, eos laborum eum provident aliquid vitae temporibus
        explicabo iure asperiores repellat eligendi fuga consequuntur odit enim!
        Et aliquam eius exercitationem architecto repellat cum harum possimus
        impedit maxime pariatur a consequatur, suscipit quia facilis enim
        quaerat corrupti reprehenderit id ullam ipsam libero eos. Quis maiores
        vitae nesciunt perspiciatis totam nobis.
      </div>
    </div>
  );
}

export default ReviewCard;
