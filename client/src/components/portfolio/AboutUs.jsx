import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-row">
      <div className="basis-5/12 p-3 flex flex-col lg:flex-col-reverse justify-center min-w-36 h-96 overflow-auto m-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        exercitationem atque perferendis laudantium earum itaque nihil ratione
        deleniti vero laborum officia, minus blanditiis doloribus sequi officiis
        deserunt quos animi aut? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Numquam optio aut unde quod quibusdam neque temporibus
        nostrum, assumenda enim ipsa atque. Quibusdam nisi id soluta cumque
        quae, totam corrupti cum quos ullam nihil ab dolorum non dignissimos
        odit aperiam voluptatibus aspernatur labore a accusantium
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
