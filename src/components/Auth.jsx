import { useState,createContext} from "react";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  
  const [user,setUser] = useState(null)

  const login = (user) => {
    setUser(user);
    localStorage.setItem('user',user)
  }
  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user')
  }
 

  return (
    <AuthContext.Provider value={{user,login,logOut}}>
      {children}
    </AuthContext.Provider>
  );
};
