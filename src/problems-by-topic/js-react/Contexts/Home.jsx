import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Home';

class Home extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;
    const { className } = theme;
    return (
      <article className={className}>
        {content}
      </article>
    );
  }
}

export default Home;