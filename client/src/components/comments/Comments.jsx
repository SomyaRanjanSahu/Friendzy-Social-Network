import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "The composition of this photo is perfect. You have a great eye for photography!",
      name: "Hrisabh Anand",
      userId: 1,
      profilePicture:
        "https://i.postimg.cc/7ZBxmKFn/ee7c0c9f-674e-4028-8fe1-3c6f1ba01976.png",
    },
    {
      id: 2,
      desc: "I can't believe how clear and crisp this image is. What kind of camera did you use?",
      name: "Gulshan Kumar",
      userId: 2,
      profilePicture:
        "https://i.postimg.cc/br66K2pW/d30ad975-2097-4c8e-8210-5128e2c734a2.png",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;