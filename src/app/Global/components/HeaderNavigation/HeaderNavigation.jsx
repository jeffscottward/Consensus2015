require('./HeaderNavigation.css');

// Modules
import React  from 'react/addons';
import Router from 'react-router-component';

//Components
import UserArea from '../UserArea/UserArea.jsx';

// Router Link Component
var Link = Router.Link;

export default React.createClass({
  render() {
    return (
      <nav className="header-navigation">
        <ul>
          <li><Link href="/quick-link-1"><i className="fa fa-file-o"></i> Quick Link 1</Link></li>
          <li><Link href="/quick-link-2"><i className="fa fa-file-o"></i> Quick Link 2</Link></li>
          <UserArea/>
        </ul>
      </nav>
    );
  }
});
