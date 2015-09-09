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

  componentDidMount() {
    this.getGeo();
  },

  getGeo() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.props.store.setStoreData({
          geoLocation: pos.coords.latitude + ', ' + pos.coords.longitude,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
      });
    }
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

  generatehash() {

    function randomString(length, chars) {
      var result = '';
      for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
    }
    var newHash = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

    this.props.store.setStoreData({
      hash: newHash
    });
  },

  signit() {

    this.props.store.setStoreData({
      signed: true
    });

  },

  getTime(){
    var date = new Date(Date.now() * 1000);
    // hours part from the timestamp
    var hours = date.getHours();
    // minutes part from the timestamp
    var minutes = '0' + date.getMinutes();
    // seconds part from the timestamp
    var seconds = '0' + date.getSeconds();

    // will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
  },

  render() {

    var formTable = (
      <div>
        <table>
          <tbody>
            <tr>
              <td><label>GPS position</label></td>
              <td><input type='text' placeholder='23.145111, 24.151232' value={this.props.store.data.geoLocation}/></td>
            </tr>
            <tr>
              <td><label>Resource Type</label></td>
              <td>
                <input type='text' placeholder='US Dollars' onChange={this.generatehash} defaultValue='US Dollars'/>
                <input type='number' placeholder='10' defaultValue='800000000000000'/> 
              </td>
            </tr>
            <tr>
              <td><label>Date</label></td>
              <td><input type='text' placeholder='Sep 14, 2015, 15:35 UTC' value={this.getTime()}/></td>
            </tr>
            <tr>
              <td><label>NGO Organization</label></td>
              <td><input type='text' placeholder='NGO ORG' onChange={this.generatehash} defaultValue='Red Cross'/></td>
            </tr>
            <tr>
              <td><label>Image</label></td>
              <td><input type='file' placeholder='12310235AFD12' onChange={this.generatehash}/></td>
            </tr>
            <tr>
              <td><label>Signature of creator</label></td>
              <td><input type='text' ref='sig' placeholder='923987926AD23CF8792B8D23' defaultValue='0x02908324908234908'/></td>
            </tr>
            <tr>
              <td><label>Hash</label></td>
              <td><input type='text' placeholder='FABC120103020' value={this.props.store.data.hash} /></td>
            </tr>
            <tr className='right'>

              <td><button onClick={this.signit}>Sign</button></td>
            </tr>
          </tbody>
        </table>
        <img src='qrcode.png'/>
      </div>
    );

    var DonationBody = (
      <div key='DonationBody'>
        {/*<div>{this.props.store.data.geoLocation}</div>*/}
        {formTable}
      </div>
    );
    var GraphUI          = (<div key='GraphUI'></div>);
    var TransmissionBody = (<div key='TransmissionBody'></div>);

    var panels = [{
      panelTitle: 'Donation Details',
      panelBody: DonationBody,
      panelActions: null
    }];

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
      <div className='invoices-main'>
        { 
          !this.props.store.data.signed ? 
            this.props.store.data.specificInvoiceView ? 
                <SpecificInvoiceView store={this.props.store}/>
              : 
                <Tabs onSelect={this.handleSelected} selectedIndex={0}>
                  <TabList key='tab-list-invoice'>{tabListSet}</TabList>
                  {TabPanelSet}
                </Tabs>
          :
            <div>Submission Confirmed!</div>
        }
      </div>
    );
  }
});
