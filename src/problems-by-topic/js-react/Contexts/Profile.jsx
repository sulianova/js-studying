import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Profile';

class Profile extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { context } = this;
    const { theme } = context;
    const { className } = theme;
    return (
      <article className={className}>
        {content}
      </article>
    );
  }
}

export default Profile;