require('./Header.css');

// Modules
import React from 'react/addons';

// Components
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation.jsx';

export default React.createClass({
  render() {
    return (
      <header className="app-header">
        <input className="app-search-box" type="text" placeholder="Search..."/>
        <HeaderNavigation/>
      </header>
    );
  }
});
