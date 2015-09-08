require('./UserArea.css');

// Modules
import React  from 'react/addons';
import Router from 'react-router-component';
import classNames from 'classnames';

// Router Link Component
var Link = Router.Link;

export default React.createClass({

  getInitialState() {
    return {
      userMenuOpen: false
    };
  },

  toggleUserMenu() {
    this.setState({
      userMenuOpen: !this.state.userMenuOpen
    });
  },

  render() {

    var userAreaClasses = classNames({
      'user-area': true,
      'open': this.state.userMenuOpen
    });

    return (
      <div className={userAreaClasses} onClick={this.toggleUserMenu}>
        <div className="user-name">USER NAME</div>
        <img className="user-pic" src="http://placehold.it/100x100" />
        <ul className="user-menu">
          <li><Link href="/quick-link-1"><i className="fa fa-file-o"></i> User Link 1</Link></li>
          <li><Link href="/quick-link-2"><i className="fa fa-file-o"></i> User Link 2</Link></li>
        </ul>
      </div>
    );
  }
});
