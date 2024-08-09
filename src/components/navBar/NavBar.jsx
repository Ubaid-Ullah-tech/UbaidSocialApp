import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { DarkModeContext } from "../context/darkModeContext.js";
import { AuthContext } from "../context/authContext.js";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;














// import React, { useContext } from "react";
// import "./navBar.scss";

// import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
// import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
// import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
// import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
// import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
// import { Link } from "react-router-dom";

// import { DarkModeContext } from "../context/darkModeContext.js";
// import { AuthContext } from "../context/authContext.js";


// const NavBar = () => {


//    const {toggle , darkMode} = useContext(DarkModeContext);
  
//    const {currentUser} = useContext(AuthContext)
  
//    return (
//     <div className="navbar">
//       <div className="left">
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span>UbaidSocialApp</span>
//         </Link>
//         <CottageOutlinedIcon />
//         {darkMode ? <NightsStayOutlinedIcon onClick={toggle}/>: <WbSunnyOutlinedIcon onClick={toggle}/>}
//         <GridViewOutlinedIcon />
//         <div className="search">
//           <SearchOutlinedIcon />
//           <input type="text" placeholder="Search...." name="search...." />
//         </div>
//       </div>

//       <div className="right"> 
//         <Person3OutlinedIcon/>
//         <MarkEmailUnreadOutlinedIcon/>
//         <NotificationsActiveOutlinedIcon/>

//         <div className="user">
//           {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLJJ0FHzVz6t8PqKX5syJu6j8Tv7xQW1fgg&s" alt="error" /> */}
//           <img src={currentUser.profilePic} alt="Error"/>
//           <span>{currentUser.name}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
