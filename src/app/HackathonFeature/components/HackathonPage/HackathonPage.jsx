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

  componentWillMount() {
    // this.props.store.createInvoice({ message: 'Hello World'});
    // this.props.store.getInvoiceData('0xBBPBPBPBPBPBPBPBPBPBPBPB');
    // this.props.store.payInvoice('0xAABBCCDDEEFFGGHHIIJJKKLLMMNN', 
    //                             '0xZZZZZZZZZXXXXXXXXXYYYYYYYYYY', 
    //                             (data) => { console.log('hello world'); });
    // this.props.store.payInvoice('0x1122334455667788990011223344', 
    //                             '0x9988776655443322110099887766', 
    //                             (data) => { console.log('hello ethereum'); });
  },

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
    // createdAtTime: 1439234022
    // ipfsText: "Invoice for consulting services."
    // paidAtTime: 1439236022
    // paymentAmount: 1000000000
    // receiverAddress: "0x01234567012345670123456701234567"
    // receiverName: "Christian Lundkvist"
    // receiverSigTimestamp: 0
    // senderAddress: "0xabcdef01abcdef01abcdef01abcdef01"
    // senderName: "Jeff Scott Ward"
    // senderSigTimestamp: 1439235022

    var InvoicesBody   = (<h1 key="InvoicesBody">Recurring</h1>);
    var RecurringBody  = (<h1 key="RecurringBody">Recurring</h1>);
    var EstimatesBody  = (<h1 key="EstimatesBody">Estimates</h1>);
    var StatementsBody = (<h1 key="StatementsBody">Statements</h1>);

    var invoiceBtnActions = [<button key="btn-1-invoice-btn" onClick={this.fireCreateInvoiceModal}>
                              Create Invoice
                            </button>,
                            <button key="btn-2-invoice-btn" onClick={this.setSpecificInvoiceView}>
                              Show Specfic Invoice View
                            </button>];

    var panels = [{
        panelTitle: 'Invoices',
        panelBody: InvoicesBody,
        panelActions: invoiceBtnActions
      }, {
        panelTitle: 'Recurring',
        panelBody: RecurringBody,
        panelActions: <button>Schedule a recurring invoice</button>
      }, {  
        panelTitle: 'Estimates',
        panelBody: EstimatesBody,
        panelActions: <button>Create an Estimate</button>
      }, {
        panelTitle: 'Statements',
        panelBody: StatementsBody,
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
