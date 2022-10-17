import React from "react";
import therock from "../assets/therock.jpg";
import therock2 from "../assets/therock2.webp";
import therock20 from "../assets/therock20.jpg";
import mike from "../assets/1miketyson.jpg";
import mikeprofile from "../assets/mikeprofile.webp";
import mrbeastbackground from "../assets/mrbeastbackground.webp";
import mrbeast from "../assets/1mrbeast.jpg";
import kobebackground from "../assets/kobebackground.jpg";
import kobe from "../assets/1kobe.webp";
import arnoldbackground from "../assets/arnoldbackground.webp";
import arnold from "../assets/1arnold.jpg";

function Stories() {
  const stories = [
    { profile: mikeprofile, background: mike, uid: "1" },
    { profile: mrbeast, background: mrbeastbackground, uid: "2" },
    { profile: kobe, background: kobebackground, uid: "3" },
    { profile: arnold, background: arnoldbackground, uid: "4" },
    { profile: mikeprofile, background: mike, uid: "1" },
    { profile: mrbeast, background: mrbeastbackground, uid: "2" },
    { profile: kobe, background: kobebackground, uid: "3" },
    { profile: arnold, background: arnoldbackground, uid: "4" },
  ];
  return (
    <div className="flex space-x-4 p-4 mx-auto sm:mx-0 overflow-y-scroll">
      {stories.map((story) => {
        return (
          <div className="w-24 h-40 flex  rounded-[1rem]">
            <div className="flex relative">
              <img
                src={story.background}
                className=" object-cover rounded-[1rem]"
              />
              <div className="absolute w-9 h-9 top-1 left-1">
                <img
                  src={story.profile}
                  className="rounded-full object-cover border-2 w-8 h-8"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
