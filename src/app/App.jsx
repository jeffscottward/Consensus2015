// CSS Injection
require('font-awesome-webpack');
require('suitcss-base');
require('./App.css');

// Modules
import React  from 'react/addons';
import Router from 'react-router-component';

// Router Components
var Locations = Router.Locations;
var Location  = Router.Location;
var NotFound  = Router.NotFound;

// Components
import Header from './global/components/Header/Header.jsx';

// Features
// import AccountingFeature from './AccountingFeature/AccountingFeature.jsx';
// import AuditingFeature   from './AuditingFeature/AuditingFeature.jsx';
import HackathonFeature   from './HackathonFeature/HackathonFeature.jsx';

// Global Pages
import NotFoundPage      from './global/components/Page404/Page404.jsx';

export default React.createClass({
  render() {
    return (
      <div id='app-container' className='app-container'>
        <Header/>
        <Locations id='features-container' className='features-container'>
          <Location path='/'                 handler = { HackathonFeature } />
          <Location path='/payroll​(/*)'      handler = { NotFoundPage } />
          <NotFound                          handler = { NotFoundPage } />
        </Locations>
      </div>
    );
  }
});
