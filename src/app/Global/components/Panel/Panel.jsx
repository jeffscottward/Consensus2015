require('./Panel.css');

// Modules
import React from 'react/addons';

export default React.createClass({
  render() {
    var classAndKey = 'panel' + ' ' + 
                      this.props.panelTitle.replace(/\s+/g, '-')
                                           .toLowerCase();
    return (
      <div className={classAndKey} key={classAndKey}>
          <div className="panel-header">
            <div className="panel-header-container">
              <h1 className="panel-header-title">{this.props.panelTitle}</h1>
              <div className="panel-header-actions">
                {this.props.panelActions ? this.props.panelActions : null}
              </div>
            </div>
            <hr/>
          </div>
          <div className="panel-body">{this.props.panelBody}</div>
          <div className="panel-footer">{this.props.panelFooter ? this.props.panelFooter : null }<hr/></div>
      </div>
    );
  }
});
