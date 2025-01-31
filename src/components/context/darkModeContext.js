// import { createContext, useEffect, useState } from "react";

// export const DarkModeContext = createContext();

// export const DarkModeContextProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(
//     JSON.parse(localStorage.getItem("darkMode")) || false
//   );

//   const toggle = () => {
//     setDarkMode(!darkMode);
//   };

//   useEffect(() => {
//     localStorage.setItem("darkMode",darkMode);
//   }, [darkMode]);

//   return (
//     <DarkModeContext.Provider value={{ darkMode, toggle }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };
















import { createContext, useEffect, useState} from 'react';

// Create the context
export const DarkModeContext = createContext();

// Create the provider component
export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode",(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
};






// import {createContext , useEffect, useState} from 'react';


// export  const DarkModeContext = createContext();

// export const DarkModeContextProvider = ({children}) =>{

//     const  [darkMode , setDarkMood] = useState(localStorage.getItem("darkMode") || false 
// );


// const toggle = () =>{
//     setDarkMood(!darkMode)
// }
  
// useEffect(()=>{
//     localStorage.setItem("darkMode" , darkMode)
// }, [darkMode])


//  return(
//     <DarkModeContext.Provider value={(darkMode , toggle)}>
//         {children}
//     </DarkModeContext.Provider>
//  );
// };