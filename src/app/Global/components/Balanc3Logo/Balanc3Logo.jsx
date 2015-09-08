require('./Balanc3Logo.css');

import React  from 'react/addons';

export default React.createClass({
  render() {
    return (
      <div className="balanc3-logo">
        <div className="pUp">
          <div className="pLeft">
            <div className="pl1"></div>
            <div className="pl2"></div>
          </div>
          <div className="pRight">
            <div className="pr2"></div>
            <div className="pr1"></div>
          </div>
        </div>
        <div className="pBottom">
          <div className="pb1"></div>
          <div className="pb2"></div>
        </div>
      </div>
    );
  }
});
