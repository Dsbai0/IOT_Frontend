// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { createContext, useEffect, useMemo, useState } from "react";

// const STORAGE_KEY = "app_settings_v1";

// export const ThemeContext = createContext({
//   darkMode: false,
//   setDarkMode: () => {},
// });

// export function ThemeProvider({ children }) {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const raw = await AsyncStorage.getItem(STORAGE_KEY);
//       if (!raw) return;
//       const s = JSON.parse(raw);
//       setDarkMode(!!s.darkMode);
//     })();
//   }, []);

//   useEffect(() => {
//     (async () => {
//       const raw = await AsyncStorage.getItem(STORAGE_KEY);
//       const old = raw ? JSON.parse(raw) : {};
//       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ ...old, darkMode }));
//     })();
//   }, [darkMode]);

//   const value = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);

//   return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
// }

// import { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const loadTheme = async () => {
//       const savedTheme = await AsyncStorage.getItem("darkMode");
//       if (savedTheme === "true") {
//         setIsDark(true);
//       }
//     };
//     loadTheme();
//   }, []);

//   const toggleTheme = async (value) => {
//     setIsDark(value);
//     await AsyncStorage.setItem("darkMode", value.toString());
//   };

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
