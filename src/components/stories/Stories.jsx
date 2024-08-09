import { useContext } from "react";
import "../stories/stories.scss"
import { AuthContext } from "./../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Ubaid ullah",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "Ubaid ullah",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "Ubaid ullah",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "Ubaid ullah",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories













// import React, { useContext } from "react";
// import "../stories/stories.scss";
// import { AuthContext } from "../context/authContext.js";

// const Stories = () => {
//   const { currentUser } = useContext(AuthContext);
//   // TEMPORARY DATA FOR STORIES

//   //TEMPORARY
//   const stories = [
//     {
//       id: 1,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     },
//     {
//       id: 4,
//       name: "John Doe",
//       img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
//     },
//   ];

//   // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLJJ0FHzVz6t8PqKX5syJu6j8Tv7xQW1fgg&s"
//   return (
//     <div className="stories">
//       <div className="story">
//         <img src={currentUser.profilePic} alt="Error" />
//         <span>{currentUser.name}</span>
//         <button>+</button>
//       </div>

//       {stories.map((story) => (
//         <div className="story" key={story.id}>
//           <img src={story.img} alt="Error" />
//           <span>{story.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Stories;
