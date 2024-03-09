
import React, {useState, createContext, useContext} from 'react'

//b1
const ThemeContext = createContext();


export const MyTheme = ({children}) => {
    //b2
    const [theme, settheme] = useState(''); // 2 dangj sáng/tối
    // viet ham chuyen mau giao diện
    const toggleTheme = () =>{
        console.log("Theme đã dùng:"+theme);
        settheme(theme === 'light'?'dark':'light');
        console.log("ĐÃ chuyển sang theme"+theme);
    }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default MyTheme

export const useTheme = () => useContext(ThemeContext);