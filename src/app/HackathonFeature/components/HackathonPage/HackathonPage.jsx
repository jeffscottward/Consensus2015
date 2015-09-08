require('./HackathonPage.css');

// Modules
import React from 'react/addons';
import DataGrid from 'react-datagrid';
import Moment from 'moment';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

// Components
import Panel from './../../../Global/components/Panel/Panel.jsx';
import SpecificInvoiceView from './../InvoiceDetails/InvoiceDetails.jsx';


export default React.createClass({

  componentWillMount() {},

  handleSelected: function (index, last) {
    // console.log('Selected tab: ' + index + ', Last tab: ' + last);
  },

  setSpecificInvoiceView() {
    this.props.store.setStoreData({
      specificInvoiceView: true,
      selectedInvoiceID: 'something'
    });
  },

  fireCreateInvoiceModal() {
    this.props.store.setStoreData({
      createInvoiceModal: {
        openStatus: true
      }
    });
  },

  render() {
    var InvoicesBody     = (<div key="InvoicesBody"></div>);
    var InventoryBody    = (<div key="InventoryBody"><button key="btn-1-invoice-btn" onClick={this.verifyGoods}>Verify Goods</button></div>);
    var TransmissionBody = (<div key="TransmissionBody"><button key="btn-1-invoice-btn" onClick={this.transmitGoods}>Trasmit Goods</button></div>);

    var panels = [{
        panelTitle: 'Order Details',
        panelBody: InvoicesBody,
        panelActions: null
      }, {
        panelTitle: 'Inventory',
        panelBody: InventoryBody,
        panelActions: null
      }, {  
        panelTitle: 'Transmission Pot',
        panelBody: TransmissionBody,
        panelActions: null
      }
    ];

    var tabListSet = [];
    panels.forEach((element, index) => {
      tabListSet.push(<Tab key={'tab-set' + index}>{element.panelTitle}</Tab>);
    });

    var TabPanelSet = [];
    panels.forEach((element, index) => {
      TabPanelSet.push(
        <TabPanel key={'tab-panel' + index}>
          <Panel key={'element-panel' + Math.random() + element.panelTitle + index}
                 panelTitle={element.panelTitle} 
                 panelBody={element.panelBody}
                 panelActions={element.panelActions}/>
        </TabPanel>
      );
    });

    return (
      <div className="invoices-main">
        { 
          this.props.store.data.specificInvoiceView ? 
          <SpecificInvoiceView store={this.props.store}/>
          : 
          <Tabs onSelect={this.handleSelected} selectedIndex={0}>
            <TabList key='tab-list-invoice'>{tabListSet}</TabList>
            {TabPanelSet}
          </Tabs>
        }
      </div>
    );
  }
});
