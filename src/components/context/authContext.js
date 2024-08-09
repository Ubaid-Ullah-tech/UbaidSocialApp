import { createContext, useEffect, useState } from "react";
import ubaid1 from '../images/ubaid1.jpg'
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "Ubaid ullah",
      profilePic: {ubaid1}
      // "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
        // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLJJ0FHzVz6t8PqKX5syJu6j8Tv7xQW1fgg&s",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};