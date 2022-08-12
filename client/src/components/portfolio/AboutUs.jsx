import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-row">
      <div className="basis-5/12 p-3 flex flex-col lg:flex-col-reverse justify-center min-w-36 h-96 overflow-auto m-3">
        Fab is renowned for signature cakes and gateaux. This trademark can be
        traced back to 1979 when Chandra Madanayake launched her confectionary
        store in her front garden beside Galle Road. The outlet remains present
        to this day, still teeming with ever-eager customers. In just over five
        years, subsequent to the demand that was generated, we were able to
        restructure and change our course, and specialize in the pastry business
        as well. We cater to our customers’ desires, going above and beyond to
        earn their trust in bringing them the choicest products and services.
        With our many strategically placed outlets in and around Colombo for
        ease of access, we remain the pioneering pastry shop franchise in Sri
        Lanka.
      </div>
      <div className="basis-7/12 m-3">
        <img
          src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t1.6435-9/118547446_10158802283738523_1912377220688197833_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGpAagGg0KTTvB7vxFOB-mDTjO6JBsCZGBOM7okGwJkYDl1jZftPZlO31zz9glmGCbpp4zQW2H7QNjjFL0H46Vh&_nc_ohc=k9qtejG4NQ8AX-4e017&_nc_ht=scontent.fmaa8-1.fna&oh=00_AT-vyNwicxhIK7ePUUagY-_9gBKATYXl4NwNs73TvqvDRw&oe=6310051E"
          alt="logo"
          className="h-96 w-full object-cover m-3 shadow-inner rounded-lg"
        />
      </div>
    </div>
  );
}

export default AboutUs;
