// Modules
import React  from  'react/addons';
import Router from  'react-router-component';

// Application
import App    from  './app/App.jsx';

// Render App when DOM is loaded
document.addEventListener('DOMContentLoaded', (event) => {
  React.render(<App/>, document.getElementById('app'));
});
