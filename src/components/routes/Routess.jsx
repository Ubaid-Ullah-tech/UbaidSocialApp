// import React from 'react';
// import { Outlet, Navigate, Routes, Route } from 'react-router-dom';
// import Login from "../../pages/login/Login";
// import Register from "../../pages/register/Register";
// import NavBar from '../navBar/NavBar';
// import RightBar from '../rightBar/RightBar';
// import LeftBar from '../leftBar/LeftBar';
// import Home from '../../pages/home/Home';
// import Profile from '../../pages/profile/Profile';

// // Assuming currentUser is defined somewhere
// const currentUser = true; // Change this as per your logic

// const Dashboard = () => {
//   return (
//     <div>
//       <NavBar />
//       <div style={{ display: 'flex' }}>
//         <LeftBar />
//         <div style={{ flex: 1 }}>
//           <Outlet />
//         </div>
//         <RightBar />
//       </div>
//     </div>
//   );
// };



// const ProtectedRoute = ({ children }) => {
//   if (!currentUser) {
//     return <Navigate to="/login" />;
//   }
//   return children;
// };

// const Routess = () => {
//   return (
//     <Routes>
//       <Route path='/login' element={<Login />} />
//       <Route path='/register' element={<Register />} />
//       <Route 
//         path='/' 
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       >
//         <Route path='/' element={<Home />} />
//         <Route path='/profile/:id' element={<Profile />} />
//       </Route>
//     </Routes>
//   );
// };

// export default Routess;









import React, { useContext } from 'react'
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import NavBar from '../navBar/NavBar'
import RightBar from '../rightBar/RightBar';
import LeftBar from '../leftBar/LeftBar';
import Home from '../../pages/home/Home'
import Profile from '../../pages/profile/Profile.jsx'
import '../../style/style.scss'


import { DarkModeContext } from '../context/darkModeContext';
import { AuthContext } from '../context/authContext';

function Routess(){

  // const currentUser = true;
const currentUser = useContext(AuthContext)

const {darkMode} = useContext(DarkModeContext)

   console.log(darkMode)

  const Layout = () => {
    return (
      // <div className="theme-dark">
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  
  const ProtectedRoute = ({children}) =>{

    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);


  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


export default Routess
