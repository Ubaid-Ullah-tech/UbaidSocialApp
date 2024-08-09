import "./leftBar.scss";
import Friends from "../images/1.png";
import Groups from "../images/2.png";
import Market from "../images/3.png";
import Watch from "../images/4.png";
import Memories from "../images/5.png";
import Events from "../images/6.png";
import Gaming from "../images/7.png";
import Gallery from "../images/8.png";
import Videos from "../images/9.png";
import Messages from "../images/10.png";
import Tutorials from "../images/11.png";
import Curses from "../images/12.png";
import Fund from "../images/13.png";
import { AuthContext } from '../context/authContext';
import { useContext } from "react";
import ubaid1 from '../images/ubaid1.jpg'

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={ubaid1} alt="Error" />
            {/* <img
              src={currentUser.profilePic}
              alt=""
            /> */}
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Curses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

















// import React, { useContext } from 'react'

// import Friends from "../images/1.png";
// import Groups from "../images/2.png";
// import Market from "../images/3.png";
// import Watch from "../images/4.png";
// import Memories from "../images/5.png";
// import Events from "../images/6.png";
// import Gaming from "../images/7.png";
// import Gallery from "../images/8.png";
// import Videos from "../images/9.png";
// import Messages from "../images/10.png";
// import Tutorials from "../images/11.png";
// import Curses from "../images/12.png";
// import Fund from "../images/13.png";

// import '../leftBar/leftBar.scss'

// import { AuthContext } from '../context/authContext';
  

// const LeftBar = () => {

//   const {currentUser} = useContext(AuthContext)
  
//   return (
//     <div className='leftbar'>
//          <div className="containser">
//           <div className="menu">
          
//             <div className="user">
//               {/* <img src="https://images.stockcake.com/public/7/5/2/752ae2fa-8b2c-4aa7-b357-5f3e68ac0903_large/joyful-school-reunion-stockcake.jpg" alt="Error" /> */}
//               <img src={currentUser.profilePic} alt="Error" />
//               <span>{currentUser.name}</span>
//             </div>

//             <div className="item">
//               <img src={Friends} alt="Error" />
//               <span>Friends</span>
//             </div>

//             <div className="item">
//               <img src={Groups} alt="Error" />
//               <span>Groups</span>
//             </div>

//             <div className="item">
//               <img src={Market} alt="Error" />
//               <span>Merket</span>
//             </div>

//             <div className="item">
//               <img src={Watch} alt="Error" />
//               <span>Watch</span>
//             </div>

//             <div className="item">
//               <img src={Memories} alt="Error" />
//               <span>Memories</span>
//             </div>
//           </div>

//             <br/>
//             <hr/>
//             <br/>

//          <div className="menu">
//           <span>Your ShortCuts</span>

//           <div className="item">
//             <img src={Events} alt="Error" />
//             <span>Events</span>
//           </div>

//           <div className="item">
//             <img src={Gaming} alt="Error" />
//             <span>Gaming</span>
//           </div>

//           <div className="item">
//             <img src={Gallery} alt="Error" />
//             <span>Gallery</span>
//           </div>

//           <div className="item">
//             <img src={Videos} alt="Error" />
//             <span>Vedios</span>
//           </div>

//           <div className="item">
//             <img src={Messages} alt="Error" />
//             <span>Messages</span>
//           </div>    
//          </div>
//             <br/>
//             <hr/>
//             <br/>
//          <div className="menu">
//           <span>Others</span>
          
//           <div className="item">
//             <img src={Tutorials} alt="Error" />
//             <span>Tutorials</span>
//           </div>

//           <div className="item">
//             <img src={Curses} alt="Error" />
//             <span>Curses</span>
//           </div>

//           <div className="item">
//             <img src={Fund} alt="Error" />
//             <span>Fund</span>
//           </div> 
//          </div>

//          </div>
//     </div>
//   )
// }

// export default LeftBar
