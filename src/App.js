import React from 'react'

import Routess from './components/routes/Routess'

const App = () => {
  return (
    <div>
      <Routess/>
    </div>
  )
}

export default App






// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";
// import NavBar from "./components/navBar/NavBar";
// import LeftBar from "./components/leftBar/LeftBar";
// import RightBar from "./components/rightBar/RightBar";
// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
// // import "./style.scss";
// // import { useContext } from "react";
// // import { DarkModeContext } from "./context/darkModeContext";
// // import { AuthContext } from "./context/authContext";

// function App() {
//   // const {currentUser} = useContext(AuthContext);

//   // const { darkMode } = useContext(DarkModeContext);

//   const Layout = () => {
//     return (
//       <div>
//         <NavBar />
//         <div style={{ display: "flex" }}>
//           <LeftBar />
//           <div style={{ flex: 6 }}>
//             <Outlet />
//           </div>
//           <RightBar />
//         </div>
//       </div>
//     );
//   };

//   // const ProtectedRoute = ({ children }) => {
//   //   if (!currentUser) {
//   //     return <Navigate to="/login" />;
//   //   }

//   //   return children;
//   // };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         // <ProtectedRoute>
//           <Layout />
//         // </ProtectedRoute>
//       ),
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/profile/:id",
//           element: <Profile />,
//         },
//       ],
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//     {
//       path: "/register",
//       element: <Register />,
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;