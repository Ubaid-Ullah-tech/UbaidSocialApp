import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import ubaid1 from '../images/ubaid1.jpg'
import ubaid2 from '../images/ubaid2.jpg'
// import rashmika from '../images/rashmika.jpg'
const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  //TEMPORARY
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={ubaid1} alt="Error" />
            {/* <img src={post.profilePic} alt="" /> */}
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>Activate your fans, don't just collect them like baseball cards.” “Focus on how to be social, not on how to do social.” “If you make customers unhappy in the physical world, they might each tell 6 friends. If you make customers unhappy on the Internet, they can each tell 6,000 friends.</p>
          {/* <p>{post.desc}</p> */}
          <img src={ubaid1} alt="Error" />
          {/* <img src={post.img} alt="" /> */}
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>


      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={ubaid1} alt="Error" />
            {/* <img src={post.profilePic} alt="" /> */}
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>Activate your fans, don't just collect them like baseball cards.” “Focus on how to be social, not on how to do social.” “If you make customers unhappy in the physical world, they might each tell 6 friends. If you make customers unhappy on the Internet, they can each tell 6,000 friends.</p>
          {/* <p>{post.desc}</p> */}
          <img src={ubaid1} alt="Error" />
          {/* <img src={post.img} alt="" /> */}
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>


      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={ubaid1} alt="Error" />
            {/* <img src={post.profilePic} alt="" /> */}
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>Activate your fans, don't just collect them like baseball cards.” “Focus on how to be social, not on how to do social.” “If you make customers unhappy in the physical world, they might each tell 6 friends. If you make customers unhappy on the Internet, they can each tell 6,000 friends.</p>
          {/* <p>{post.desc}</p> */}
          <img src={ubaid2} alt="Error" />
          {/* <img src={post.img} alt="" /> */}
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>

    </div>


  );
};

export default Post;





























// import "./post.scss";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
// import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
// import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Link } from "react-router-dom";
// import Comments from "../comments/Comments";
// import { useState } from "react";
// import ubaid1 from '../images/ubaid1.jpg'
// import rashmika from '../images/rashmika.jpg'
// const Post = ({ post }) => {
//   const [commentOpen, setCommentOpen] = useState(false);

//   //TEMPORARY
//   const liked = false;

//   return (
//     <div className="post">
//       <div className="container">
//         <div className="user">
//           <div className="userInfo">
//             <img src={ubaid1} alt="Error" />
//             {/* <img src={post.profilePic} alt="" /> */}
//             <div className="details">
//               <Link
//                 to={`/profile/${post.userId}`}
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <span className="name">{post.name}</span>
//               </Link>
//               <span className="date">1 min ago</span>
//             </div>
//           </div>
//           <MoreHorizIcon />
//         </div>
//         <div className="content">
//           <p>Activate your fans, don't just collect them like baseball cards.” “Focus on how to be social, not on how to do social.” “If you make customers unhappy in the physical world, they might each tell 6 friends. If you make customers unhappy on the Internet, they can each tell 6,000 friends.</p>
//           {/* <p>{post.desc}</p> */}
//           <img src={ubaid1} alt="Error" />
//           {/* <img src={post.img} alt="" /> */}
//         </div>




//         <div className="info">



//           <div className="item">
//             {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
//             12 Likes
//           </div>
//           <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
//             <TextsmsOutlinedIcon />
//             12 Comments
//           </div>
//           <div className="item">
//             <ShareOutlinedIcon />
//             Share
//           </div>
//         </div>
//         {commentOpen && <Comments />}
//       </div>
//     </div>
//   );

// };

// export default Post;
