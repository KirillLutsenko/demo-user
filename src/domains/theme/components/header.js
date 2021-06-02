import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const Header = () => {
  // при помощи хука useSelector мы спокойно из любой точки берем state
  // const theme = useSelector(state => state.theme);
  const {
    current,
    color,
    applyDefault,
    applyDark,
    applyColor,
  } = useTheme();

  const changeColorToRed = () => {
    applyColor('red');
  };

  return (
    <header className="App__header">
      <h1>Header</h1>
      <button type="button" onClick={applyDark}>
        Change theme to Dark
      </button>
      <button type="button" onClick={applyDefault}>
        Change theme to Default
      </button>
      <button type="button" onClick={changeColorToRed}>
        Red
      </button>
      <h2>{`Current theme is ${current}`}</h2>
      <h2>{`Current theme color is ${color}`}</h2>
    </header>
  );
};
