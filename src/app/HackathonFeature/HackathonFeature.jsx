// Modules
import React  from 'react/addons';
import Router from 'react-router-component';
import Reflux from 'reflux';
import classnames from 'classnames';

// Store
import HackathonStore from './HackathonStore.jsx'; 

// Components
// import CreateInvoiceModal from './components/CreateInvoiceModal/CreateInvoiceModal.jsx';
import HackathonPage from './components/HackathonPage/HackathonPage.jsx';

// Router Components
var Locations = Router.Locations;
var Location  = Router.Location; 

export default React.createClass({
  mixins: [Reflux.ListenerMixin],
  componentWillMount() {
    this.listenTo(HackathonStore, this.publishedDataStatus); 
  },
  publishedDataStatus(data) {
    data.event === 'updatedStoreData' ?
     this.forceUpdate() : null; 
  },  
  render() {
    return (
      <div className='Hackaton-controller-container'>
        {/* 
          HackathonStore.data.createInvoiceModal.openStatus ? 
            <CreateInvoiceModal store={HackathonStore}/> 
          : null 
        */}
        <Locations contextual 
                   className='hackaton-pages-container'>
            <Location path='/' 
                      handler={HackathonPage} 
                      store={HackathonStore}/>
        </Locations>
      </div>
    );
  }
});
