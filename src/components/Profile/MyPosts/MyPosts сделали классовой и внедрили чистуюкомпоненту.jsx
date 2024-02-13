import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

// PureComponent автоматически  применяет метод shouldComponentUpdate
class MyPosts extends React.PureComponent {
  // debugger;
  // можно запретить компоненте перерисовываться принудительно
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps !== this.props || nextState !== this.state;
  //   // return false;
  // }
  render() {
    console.log("render");
    let postItem = this.props.postData.map((post) => (
      <Post message={post.message} likes={post.likes} key={post.id} />
    ));
    return (
      <div className={style.postsBlock}>
        <NewPostContainer />
        {postItem}
      </div>
    );
  }
}

export default MyPosts;

// const MyPosts = (props) => {
//   // debugger;
//   console.log("MyPosts", props);
//   let postItem = props.postData.map((post) => (
//     <Post message={post.message} likes={post.likes} key={post.id} />
//   ));
//   return (
//     <div className={style.postsBlock}>
//       <NewPostContainer />
//       {postItem}
//     </div>
//   );
// };
