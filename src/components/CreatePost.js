import React from "react";

import photos from "../assets/photos.png";
import smile from "../assets/smile.png";
import guy from "../assets/guy7.jpg";
import camera from "../assets/camera.png";
function CreatePost() {
  return (
    <div className="w-screen sm:w-full ">
      <div className="max-w-[25rem] w-full my-8 p-3 bg-gray-100 flex rounded-[1rem] sm:max-w-[33rem] mx-auto">
        <div className="w-11 h-11 flex items-center">
          <img src={guy} className="rounded-full " />
        </div>

        <div className="flex items-center ml-5 w-full">
          <input
            placeholder="whats on your mind?"
            type="text"
            className="bg-gray-300 rounded-full p-3 outline-none w-full"
          />
        </div>
        <button className="bg-blue-500 px-3 rounded-full ml-4">Post</button>
      </div>
      <div className="border-b"></div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="w-7">
            <img src={camera} />
          </div>
          <p>Live Video</p>
        </div>
        <div className="flex">
          <div className="w-7">
            <img src={photos} />
          </div>
          <p>Photo/Video</p>
        </div>
        <div className="flex">
          <div className="w-7">
            <img src={smile} />
          </div>
          <p>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
