import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [username, setUsername] = useState(null);

  const login = (name) => {
    setUsername(name);
  };

  const logout = () => {
    setUsername(null);
  };

  const value = {
    username,
    isAuthenticated: !!username,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
