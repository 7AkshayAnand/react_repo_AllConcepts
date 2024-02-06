import Post from "./Post";

const PostLists = ({ postdata, getPost }) => {
  return (
    <>
      <button onClick={getPost}>
        <h1>Click me for getting More Data from fetch API</h1>
      </button>
      {postdata.map((post) => (
        <Post post={post} getPost={getPost}></Post>
      ))}
      ;
    </>
  );
};

export default PostLists;
