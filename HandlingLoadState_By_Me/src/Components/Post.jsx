import { MdDelete } from "react-icons/md";

// import { useContext } from "react";
// import { PostList as PostListData } from "../store/post-list-store";

const Post = ({ post, getPost }) => {
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <MdDelete />
              <span class="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>

          <div className="alert alert-success reactions" role="alert">
            This post has been reacted by {post.reactions} People
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
