require('./Header.css');

// Modules
import React from 'react/addons';

// Components
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.jsx';

export default React.createClass({
  render() {
    return (
      <header className="app-header">
        <h1>Disaster Relief Provenenace</h1>
      </header>
    );
  }
});
