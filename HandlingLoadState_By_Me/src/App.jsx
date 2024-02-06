import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostLists from "./Components/PostLists";

import { useState } from "react";
import LoadingSPinner from "./Components/LoadingSPinner";

function App() {
  const [fetching, setFetching] = useState(false);
  const postdata = [];
  const [postList, setPostList] = useState(postdata);
  const handleGetPostsClick = () => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });
  };

  function addInitialPost(orgdata) {
    console.log("i am called");
    const newPostList = orgdata;
    setPostList(newPostList);
  }

  return (
    <>
      {/* click on button on userInterface to see the effect of loading */}
      {fetching && <LoadingSPinner />}
      {!fetching && (
        <PostLists
          postdata={postList}
          getPost={handleGetPostsClick}
        ></PostLists>
      )}
    </>
  );
}

export default App;
