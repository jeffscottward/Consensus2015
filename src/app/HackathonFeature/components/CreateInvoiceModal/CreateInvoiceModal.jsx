require('./CreateInvoiceModal.css');

// Modules
import React  from 'react/addons';
import classnames from 'classnames';
import moment  from 'moment';

import Modal from '../../../Global/components/Modal/Modal.jsx';

export default React.createClass({
  
  closeModal() {
    this.props.store.setStoreData({
      createInvoiceModal: {
        openStatus: false,
        editInvoiceModalDetailsOpen: false,
        selectedCurrency: 'USD',
        selectedCurrencySymbol: '$',
        selectedReminderDate: '3 days after due',
        invoiceNumber: '001',
        selectedCreatedDate: null,
        selectedDueDate: null,
        invoiceSubHeading: null,
        invoiceFooter: null,
        invoicePoso: null,
        invoiceMemo: null,
        selectedClient: 'Goldman Sachs',
        selectedProduct: 'Software Engineering',
        productDescription: null,
        productQuantity: '1',
        productPrice: '1.00',
        productTax: 'NYS tax Bracket A',
        uuid: ''
      }

      // createInvoiceModalOpen: false,
      // selectedCurrency: 'USD',
      // selectedCurrencySymbol: '$',
      // selectedReminderDate: '3 days after due',
      // invoiceNumber: '001',
      // selectedCreatedDate: null,
      // selectedDueDate: null,
      // invoiceSubHeading: null,
      // invoiceFooter: null,
      // invoicePoso: null,
      // invoiceMemo: null,
      // selectedClient: 'Goldman Sachs',
      // selectedProduct: 'Software Engineering',
      // productDescription: null,
      // productQuantity: '1',
      // productPrice: '1.00',
      // productTax: 'NYS tax Bracket A'
    }); 
  },
  toggleInvoiceDetailsForm() {
    
    console.log(this.props.store.data.createInvoiceModal.editInvoiceModalDetailsOpen);

    this.props.store.setStoreData({
      createInvoiceModal: {
        editInvoiceModalDetailsOpen: !this.props.store.data.createInvoiceModal.editInvoiceModalDetailsOpen
      }
    }); 
  },

  setInvoiceNumber(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        invoiceNumber: event.target.value
      }
    });
  },
  selectCreatedDate(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        selectedCreatedDate: event.target.value
      }
    });
  },
  selectDueDate(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        selectedDueDate: event.target.value
      }
    });
  },
  reminderDateSelection(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        selectedReminderDate: event.target.value
      }
    });
  },
  selectCurrency(event) {

    if(event.target.value === 'USD'){
      this.props.store.setStoreData({
        createInvoiceModal: {
          selectedCurrencySymbol: '$',
          selectedCurrency: event.target.value
        }
      });
    }
    if(event.target.value === 'BTC'){
      this.props.store.setStoreData({
        createInvoiceModal: {
          selectedCurrencySymbol: 'B',
          selectedCurrency: event.target.value
        }
      });
    }
    if(event.target.value === 'ETH'){
      this.props.store.setStoreData({
        createInvoiceModal: {
          selectedCurrencySymbol: 'Ξ',
          selectedCurrency: event.target.value
        }
      });
    }

    this.props.store.setStoreData({
      createInvoiceModal: {
        selectedCurrency: event.target.value
      }
    });
  },

  setInvoiceSubHeading(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        invoiceSubHeading: event.target.value
      }
    });
  },
  setInvoiceFooter(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        invoiceFooter: event.target.value
      }
    });
  },
  setInvoicePoSo(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        invoicePoso: event.target.value
      }
    });
  },
  setInvoiceMemo(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        invoiceMemo: event.target.value
      }
    });
  },

  selectClient(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        selectedClient: event.target.value
      }
    });
  },

  selectProduct(event) {
    this.props.store.setStoreData({
      createInvoiceModal: {
        selectedProduct: event.target.value
      }
    });
  },
  setProductDescription(event){
    this.props.store.setStoreData({
      createInvoiceModal: {
        productDescription: event.target.value
      }
    });
  },
  setProductQuantity(event){
    this.props.store.setStoreData({
      createInvoiceModal: {
        productQuantity: event.target.value
      }
    });
    this.setSubtotal();
  },
  setProductPrice(event){
    this.props.store.setStoreData({
      createInvoiceModal: {
        productPrice: event.target.value
      }
    });
    this.setSubtotal();
  },
  setSubtotal() {

    var subTotal = this.props.store.data.createInvoiceModal.productQuantity * 
                   this.props.store.data.createInvoiceModal.productPrice;

    this.props.store.setStoreData({
      createInvoiceModal: {
        subTotal: subTotal
      }
    });

    this.setTotal();
  },
  
  setTotal() {
    var total = this.props.store.data.createInvoiceModal.subTotal + 
                this.props.store.data.createInvoiceModal.productTaxAmount;

    console.log(total);
    
    this.props.store.setStoreData({
      createInvoiceModal: {
        total: total
      }
    });
  },

  selectProductTax(event){
    
    if(event.target.value === 'NYS tax Bracket A'){
      this.props.store.setStoreData({
        createInvoiceModal: {
          productTaxAmount: 50,
          productTax: event.target.value
        }
      });
    }
    if(event.target.value === 'NYS tax Bracket B'){
      this.props.store.setStoreData({
        createInvoiceModal: {
          productTaxAmount: 100,
          productTax: event.target.value
        }
      });
    }
    if(event.target.value === 'NYS tax Bracket C'){
      this.props.store.setStoreData({
        createInvoiceModal: {
          productTaxAmount: 200,
          productTax: event.target.value
        }
      });
    }

    // this.props.store.setStoreData({
    //   createInvoiceModal: {
    //     productTax: event.target.value
    //   }
    // });
    this.setTotal();
  },
  submitBtnClick() {

    this.props.store.setStoreData({
      createInvoiceModal: {
        uuid: Math.random() + '' + Math.random()
      }
    });

    this.props.store.createInvoice(this.props.store.data.createInvoiceModal);
    this.closeModal();
  },

  render() {

    var editingDetails = this.props.store.data.createInvoiceModal.editInvoiceModalDetailsOpen;
    var data = this.props.store.data.createInvoiceModal;

    var createInvoiceModalBody = (
      <div className='createInvoiceForm'>
        <section className='invoice-edit-action-area'>
          <a className="text-link-inbound" 
             onClick={this.toggleInvoiceDetailsForm}>
             {
              !editingDetails ? 
                'Edit Invoice Details' 
              : 
                'Save Invoice Details'
            }
          </a>
        </section>        
        <section className='invoice-base-info'>
          <table>
            <thead>
              <tr>
                <td>INVOICE #</td>
                <td>CREATED</td>
                <td>DUE</td>
                <td>REMINDER</td>
                <td>CURRENCY</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {
                    editingDetails ?
                      <input className="invoice-number" 
                             type="number" 
                             placeholder="001"
                             value={data.invoiceNumber}
                             defaultValue='001'
                             onChange={this.setInvoiceNumber}/> 
                    : 
                      <input className="invoice-number" 
                             type="text" 
                             placeholder="001" 
                             value={data.invoiceNumber} 
                             readOnly 
                             disabled/>
                  }
                </td>
                <td>
                  <input type="date" 
                         disabled={!editingDetails}
                         value={data.selectedCreatedDate}
                         onChange={this.selectCreatedDate}/>
                </td>
                <td>
                  <input type="date" 
                         disabled={!editingDetails}
                         value={data.selectedDueDate}
                         onChange={this.selectDueDate}/>
                </td>
                <td>
                  {
                    editingDetails ?
                      <select value={data.selectedReminderDate} 
                              onChange={this.reminderDateSelection}>
                        <option value='3 days after due'>
                          3 days after due
                        </option>
                        <option value='7 days after due'>
                          7 days after due
                        </option>
                        <option value='14 days after due'>
                          14 days after due
                        </option>
                      </select>
                    :
                      <span className="reminder-date-text">
                        {data.selectedReminderDate}
                      </span>
                  }
                </td>
                <td>
                  {
                    editingDetails ?
                      <select value={data.selectedCurrency}
                              defaultValue='ETH' 
                              onChange={this.selectCurrency}>
                        <option value='ETH'>ETH</option>
                        <option value='USD'>USD</option>
                        <option value='BTC'>BTC</option>
                      </select>
                    :
                      <span className={
                        classnames([
                          'currency-text', 
                          data.selectedCurrency
                        ])
                      }>
                        {data.selectedCurrency}
                      </span>
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </section>
          { 
            editingDetails ?
              <section className='invoice-base-info-editor'>
                <div className='invoice-base-info-editor-1'>
                  <div className="invoice-subheading">
                    <label>Subheading</label>
                    <input type="text" 
                           placeholder="Appears near the top underneath the invoice title" 
                           value={data.invoiceSubHeading}
                           onChange={this.setInvoiceSubHeading}/>
                  </div>
                  <div className="invoice-footer">
                    <label>Footer</label>
                    <input type="text" 
                           placeholder="Appears near the bottom of the invoice" 
                           value={data.invoiceFooter}
                           onChange={this.setInvoiceFooter}/>
                  </div>
                  <div className="invoice-po-so">
                    <label>P.O/S.O</label>
                    <input type="text" 
                           placeholder="Purchase Order/Shipping Order" 
                           value={data.invoicePoso}
                           onChange={this.setInvoicePoSo}/>
                  </div>
                </div>
                <div className='invoice-base-info-editor-2'>
                  <label>Memo</label>
                  <textarea value={data.invoiceMemo} 
                            onChange={this.setInvoiceMemo}
                            placeholder="Add any additional descriptive information here"/>
                </div> 
              </section>
            :
              null 
          }
        <hr/>
        <section className='invoice-questions'>
          <ul>
            <li>
              <div className='question-number-label'>1</div>
              <div className='question-text'>Who are you invoicing?</div>
              <select value={data.selectedClient} 
                      onChange={this.selectClient}>
                <option value='ConsenSys'>ConsenSys</option>
                <option value='Goldman Sachs'>Goldman Sachs</option>
                <option value='JP Morgan'>JP Morgan</option>
                <option value='Citibank'>Citibank</option>
              </select>
            </li>
            <li>
              <div className='question-number-label'>2</div>
              <div className='question-text'>What produces or services did you sell?</div>
              <table>
                <thead>
                  <tr>
                    <td>PRODUCT</td>
                    <td>DESCRIPTION</td>
                    <td>QUANTITY</td>
                    <td>PRICE</td>
                    <td>TAX</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <select value={data.selectedProduct} 
                              onChange={this.selectProduct}>
                        <option value='Software Engineering'>Software Engineering</option>
                        <option value='Financial Consultation'>Financial Consultation</option>
                        <option value='Legal Consultation<'>Legal Consultation</option>
                      </select>
                    </td>
                    <td>
                      <textarea placeholder='Please explain in detail...'
                                value={data.productDescription} 
                                onChange={this.setProductDescription}></textarea>
                    </td>
                    <td>
                      <input type='number' ref='quantity' min='1'
                                value={data.productQuantity} 
                                onChange={this.setProductQuantity}/>
                    </td>
                    <td>
                      <input type='number' ref='price' min='1' size='18'
                                value={data.productPrice} 
                                onChange={this.setProductPrice}/>
                    </td>
                    <td>
                      <select value={data.productTax} 
                              onChange={this.selectProductTax}>
                        <option value='NYS tax Bracket A'>NYS tax Bracket A</option>
                        <option value='NYS tax Bracket B'>NYS Tax Bracket B</option>
                        <option value='NYS tax Bracket C'>NYS Tax Bracket C</option>
                      </select>
                    </td>
                    <td>{data.selectedCurrencySymbol}{data.productTaxAmount}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </section>
        <section className='invoice-review-details'>
          <div className='question-number-label'>3</div>
          <div className='question-text'>Review Your Invoice Details</div>
          <div className='invoice-review-details-container'>
            <table>
              <thead>
                <tr>
                  <td>SubTotal</td>
                  <td>Tax</td>
                  <td>
                    <span>Total:</span>
                    <span className={data.selectedCurrency}>{data.selectedCurrency}</span>
                    </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.selectedCurrencySymbol}{data.subTotal}</td>
                  <td>{data.selectedCurrencySymbol}{data.productTaxAmount}</td>
                  <td>{data.selectedCurrencySymbol}{data.total}</td>
                </tr>
              </tbody>
            </table>
            <div className='invoice-review-action-buttons'>
              <button className='save-invoice' onClick={this.submitBtnClick}>Submit</button>
            </div>
          </div>
        </section>
      </div>
    );

    return (
      <Modal modalTitle='Create an Invoice'
             modalActions={<button onClick={this.closeModal}>X</button>}
             modalBody={createInvoiceModalBody}/>
    );
  }
});
