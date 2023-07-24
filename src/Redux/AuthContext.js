import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // You can implement your authentication logic here, such as sending login data to the backend.
    // For this example, we'll just set the user data in the state.
    setUser(userData);
  };

  const logout = () => {
    // You can implement the logout logic here.
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
