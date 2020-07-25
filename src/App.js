import React, {useEffect,  useState} from 'react';
import Nav from './Components/Nav';
import API from './Components/API';

function App() {

  const [darkMode, setDarkMode] = useState(getInitialMode());
  
 
  useEffect(() => {
  localStorage.setItem("dark", JSON.stringify(darkMode));
}, [darkMode]);


function getInitialMode() {
  const isReturningUser = "dark" in localStorage;
  const savedMode = JSON.parse(localStorage.getItem("dark"));
  const userPrefersDark = getPrefColorScheme();
  if (isReturningUser) {
    return savedMode;
  } else if (userPrefersDark) {
    return true;
  } else {
    return false;
  }
}

function getPrefColorScheme() {
  if (!window.matchMedia) return;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}




  return (
    <div className="App" >
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <API darkMode={darkMode} />
    </div>
  );
}

export default App;
