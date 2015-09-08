require('./Modal.css');

// Modules
import React from 'react/addons';

export default React.createClass({
  render() {
    return (
      <div className='modal-wrapper'>
        <div className={'modal' + ' ' + this.props.modalTitle.replace(/\s+/g, '-').toLowerCase()}>
          <div className="modal-header">
            <div className="modal-header-container">
              <h1 className="modal-header-title">{this.props.modalTitle}</h1>
              <div className="modal-header-actions">
                {this.props.modalActions ? this.props.modalActions : null}
              </div>
              {this.props.modalHeader ? <div className="modal-header-body">{this.props.modalHeader}</div> : null}
            </div>
            <hr/>
          </div>
          <div className="modal-body">{this.props.modalBody}</div>
          <div className="modal-footer">
            {this.props.modalFooter ?
             this.props.modalFooter : null }
          </div>
        </div>
      </div>
    );
  }
});
