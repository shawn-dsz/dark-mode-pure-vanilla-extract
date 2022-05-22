import React, { useState } from 'react';
import { guestTheme, manageTheme } from './vars.css';
import * as styles from './Box/Backgrounds.css';
import { Demo } from './Demo';
import { Box } from './Box/Box';
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const colorTheme = isDarkTheme ? styles.defaultDark : styles.defaultLight;
  return (
    <>
      <button onClick={() => setIsDarkTheme((currentValue) => !currentValue)}>
        Switch to {isDarkTheme ? 'light' : 'dark'} theme
      </button>
      <Box style={{ display: 'flex' }}>
        <div className={[colorTheme, guestTheme].join(' ')} style={{ flex: 1 }}>
          <Demo />
        </div>

        <div
          className={[colorTheme, manageTheme].join(' ')}
          style={{ flex: 1 }}
        >
          <Demo />
        </div>
      </Box>
    </>
  );
};

export default App;
