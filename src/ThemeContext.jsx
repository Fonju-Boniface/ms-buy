import React from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(() => {
    // Check if localStorage is available before accessing it
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? JSON.parse(savedMode) : false;
    }
    return false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    // Check if localStorage is available before updating it
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('darkMode', JSON.stringify(newMode));
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);