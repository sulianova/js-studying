import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { themes, setTheme, theme } = this.context;
    return (
      <ButtonGroup className="mt-2">
        {themes.map((curTheme) => (
          <ToggleButton
            key={curTheme.id}
            id={`radio-${curTheme.id}`}
            type="radio"
            name="radio"
            value={curTheme.name}
            checked={curTheme.name === theme.name}
            onChange={() => setTheme(curTheme)}
          >
            {curTheme.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }
}

export default ThemeSwitcher;