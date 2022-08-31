import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-row gap-20">
      <div class="mb-3 xl:w-96">
    <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
      >Description</label
    >
    <textarea
      class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
       bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
        ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleFormControlTextarea1"
      rows="3"
      placeholder="Your message"
    ></textarea>
  </div>
      <div className="basis-7/12 m-5">
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
