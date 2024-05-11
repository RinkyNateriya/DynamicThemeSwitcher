import React, { useState, useEffect } from 'react';
import '../../src/styles/css/style.css'

const ThemesSwicther = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [customTheme, setCustomTheme] = useState(() => {
    return JSON.parse(localStorage.getItem('customTheme')) || {
      backgroundColor: '#ffffff',
      color: '#000000',
    };
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('customTheme', JSON.stringify(customTheme));
  }, [customTheme]);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    setCustomTheme({
      backgroundColor: selectedTheme === 'light' ? '#ffffff' : '#000000',
      color: selectedTheme === 'light' ? '#000000' : '#ffffff',
    });
  };

  const handleColorChange = (event) => {
    const { name, value } = event.target;
    setCustomTheme((prevTheme) => ({
      ...prevTheme,
      [name]: value,
    }));
  };

  const ReloadWindow=()=>
  {
window.location.reload()
  }

  return (
    <div  style={{ ...customTheme, minHeight: '100vh', padding: '20px' }}>
      <h1>Custom Theme Switcher</h1>
      <div className='themewraper'>
      <button onClick={() => handleThemeChange('light')}>Light Theme</button>

      <button onClick={() => handleThemeChange('dark')}>Dark Theme</button>
      <input
        type="color"
        name="backgroundColor"
        value={customTheme.backgroundColor}
        onChange={handleColorChange}
      />
      <input
      className=''
        type="color"
        name="color"
        value={customTheme.color}
        onChange={handleColorChange}
      />
      <button onClick={ReloadWindow} >Reload</button>
</div>
    </div>

  );
};

export default ThemesSwicther;

