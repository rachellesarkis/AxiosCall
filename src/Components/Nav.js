import React from 'react';
function Nav ({darkMode, setDarkMode}) {

    

    function settingDarkMode() {
        setDarkMode(prevMode => !prevMode)}


       

   
    return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <div className="toggle-container">
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <span className="toggle">
            <input
              checked={darkMode}
              onChange={settingDarkMode}
              id="checkbox"
              className="checkbox"
              type="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "slateblue" : "grey" }}>☾</span>
        </div>
      </nav>
    </div>
    )
}

export default Nav;