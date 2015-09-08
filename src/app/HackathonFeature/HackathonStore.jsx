// Modules
import React   from 'react/addons';
import Reflux  from 'reflux';
import Request from 'axios';
import _       from 'lodash';
import moment  from 'moment';
import web3    from 'web3';


export default Reflux.createStore({

  data: {
    createInvoiceModal: {
      openStatus: false,
      editInvoiceModalDetailsOpen: false,
      selectedCurrency: 'USD',
      selectedCurrencySymbol: '$',
      selectedReminderDate: '3 days after due',
      invoiceNumber: '001'
    }
  },

  init() {

    // this.getInvoiceData('0xb4e4745d4c6e678c4e1c635d92818719740213c2');
    
    // Broadcast Store is ready
    this.trigger({
        store: 'InvoicesRefluxStore',
        event: 'initStore',
        data: 'InvoicesRefluxStore Initialized'
    });
  },

  setStoreData(data) {

    // Merge new data
    _.merge(this.data, data);

    // Trigger global update
    this.updatedStoreData('setStoreData', this.data[data]);
  },

  updatedStoreData(data) {
    this.trigger({
        store: 'InvoicesRefluxStore',
        event: 'updatedStoreData',
        data: data
    });
  },

  storeInvoiceInLocalStorage(invoiceDataObj){
    localStorage.setItem('invoice-' + invoiceDataObj.uuid, JSON.stringify(invoiceDataObj));
  },
  getInvoiceFromLocalStorage(uuid){
    localStorage.getItem('invoice-' + uuid);
  }
});
