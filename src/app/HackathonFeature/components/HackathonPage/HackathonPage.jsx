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

  buildmap() {
    // https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false
    // https://developers.google.com/maps/documentation/javascript/examples/map-simple
    var map;
    var geoLoc = new window.google.maps.LatLng(this.props.store.data.latitude, this.props.store.data.longitude);  
    var mapOptions = {
      zoom: 4,
      center: geoLoc
    };
    
    map = new window.google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var marker = new window.google.maps.Marker({
      position: geoLoc,
      map: map,
      title: 'Aid Chain'
    });
  },

  getGeo() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.props.store.setStoreData({
          geoLocation: 'Location: ' + pos.coords.latitude + ', ' + pos.coords.longitude,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        });
        this.buildmap();
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

  render() {


    // Hand written code (last 6 symbols of hash)
    // 103020

    // GPS position
    // 23.145111, 24.151232

    // Type
    // Bottle of water

    // Date
    // Sep 14, 2015, 15:35 UTC

    // Owner
    // RedCross

    // Image reference
    // 12310235AFD12

    // Hash
    // FABC120103020

    // Signature of creator
    // 923987926AD23CF8792B8D23

    var form = (
      <table>
        <tbody>
          <tr>
            <td><label>Hand written code (last 6 symbols of hash)</label></td>
            <td><input type="text" placeholder="103020" onChange={this.setFormValues}/></td>
          </tr>
          
          <tr>
            <td><label>GPS position</label></td>
            <td><input type="text" placeholder="23.145111, 24.151232" onChange={this.setFormValues}/>.145111, 24.151232</td>
          </tr>
          
          <tr>
            <td><label>Type</label></td>
            <td><input type="text" placeholder="Bottle of water" onChange={this.setFormValues}/> of water</td>
          </tr>
          
          <tr>
            <td><label>Date</label></td>
            <td><input type="text" placeholder="Sep 14, 2015, 15:35 UTC" onChange={this.setFormValues}/> 14, 2015, 15:35 UTC</td>
          </tr>
          
          <tr>
            <td><label>Owner</label></td>
            <td><input type="text" placeholder="RedCross" onChange={this.setFormValues}/></td>
          </tr>
          
          <tr>
            <td><label>Image reference</label></td>
            <td><input type="text" placeholder="12310235AFD12" onChange={this.setFormValues}/></td>
          </tr>
          
          <tr>
            <td><label>Hash</label></td>
            <td><input type="text" placeholder="FABC120103020" onChange={this.setFormValues}/></td>
          </tr>

          <tr>
            <td><label>Signature of creator</label></td>
            <td><input type="text" placeholder="923987926AD23CF8792B8D23" onChange={this.setFormValues}/></td>
          </tr>
        
        </tbody>
      </table>
  


    var InvoicesBody = (
      <div key="InvoicesBody">
        {/*<div>{this.props.store.data.geoLocation}</div>*/}
        <div id="map-canvas"></div>
      </div>
    );
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
