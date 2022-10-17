import React from "react";
import CreatePost from "./CreatePost";
import LeftSidebar from "./LeftSidebar";
import Stories from "./Stories";

function Feed() {
  return (
    <div className="flex">
      {/* leftsidebar */}
      <LeftSidebar />
      {/* stories */}
      <div className="mx-auto">
        <Stories />
        {/* createpost */}
        <CreatePost />
        {/* post */}
        {/* rightsidebar */}
      </div>
    </div>
  );
}

export default Feed;
