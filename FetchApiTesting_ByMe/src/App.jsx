import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostLists from "./Components/PostLists";

import { useState } from "react";

function App() {
  const postdata = [
    {
      userId: 101,
      title: "book",
      body: "hi am buying a book",
      reactions: "100",
    },
    {
      userId: 102,
      title: "boosdfk",
      body: "hi asfsdfm buying a book",
      reactions: "1003",
    },
  ];
  const [postList, setPostList] = useState(postdata);
  const handleGetPostsClick = () => {
    console.log("get posts clicked");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  };

  function addInitialPost(orgdata) {
    console.log("i am called");
    const newPostList = orgdata;
    setPostList(newPostList);
  }

  return (
    <>
      <PostLists postdata={postList} getPost={handleGetPostsClick}></PostLists>
    </>
  );
}

export default App;
