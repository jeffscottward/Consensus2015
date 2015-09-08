require('./InvoiceDetails.css');

// Modules
import React from 'react/addons';
import Moment from 'moment';

import Panel from '../../../Global/components/Panel/Panel.jsx';

export default React.createClass({
  componentWillMount() { 
    var address = '0xBBPBPBPBPBPBPBPBPBPBPBPB';
    this.props.store.getInvoiceData(address); 
  },
  render() {

    console.log(this.props.store.getInvoiceFromLocalStorage('invoice-0.10597347514703870.7403178117237985'));
    
    // var invoiceData = this.props.store.getInvoiceFromLocalStorage('invoice-0.10597347514703870.7403178117237985');
    

    var invoiceData = {
      uuid: 12345,
      number: 2,
      subhead: 'Some subhead text',
      business: {
        logo: 'http://baconmockup.com/200/200/',
        name: 'JeffScottWard LLC',
        streetAddress: '240 Kent Ave',
        aptNum: '1',
        cityStateZip: 'Brooklyn, NY 11222',
        country: 'United States'
      },
      billing: {
        name: 'Some Dude',
        streetAddress: '123 Some Place',
        apt: '5C',
        cityStateZip: 'Some City, NY 11111',
        country: 'United States',
        pobox: '12345678910',
        email: 'somedude@somedude.com',
        dateCreated: 'Aug. 10, 2015',
        dueDate: 'Aug. 24, 2015',
        amountDue: '$100.00'
      },
      products: [
        {
          name: 'Consulting Service',
          description: 'Programming For some interface',
          quantity: 1,
          price: '$100.00',
          amount: '$100.00'
        },
        {
          name: 'Consulting Service',
          description: 'Programming For some interface',
          quantity: 1,
          price: '$100.00',
          amount: '$100.00'
        },
        {
          name: 'Consulting Service',
          description: 'Programming For some interface',
          quantity: 1,
          price: '$100.00',
          amount: '$100.00'
        }
      ],
      memo: 'THIS IS SOME KIND OF MEMO WITH SOME INFO',
      totals: {
        subtotal: '$100.00',
        tax: {
          name: 'New Tax',
          number: '00001',
          amount: '$10.00'
        },
        total: '$100.00',
        payments: '',
        totalPaid: '$0.00',
        amountDue: '$110.00'
      }
    };
 
    var panelBody = (
      <div className="invoice-details">
        <section className="invoice-number-area">
          <div className="invoice-number-area-sticky">
            <span>INVOICE: <strong>{invoiceData.number}</strong></span>
            <br/>
            <span className="invoice-number-area-text">{invoiceData.subhead}</span>
          </div>
        </section>
        <section className="invoice-header">
          <div className="business-information">
            <img className="business-logo" src={invoiceData.business.logo}/>
            <div className="business-address">
              <div>
                <strong className="business-name">{invoiceData.business.name}</strong>
              </div>
              <div className="business-address">
                  <div className="business-street-address">{invoiceData.business.streetAddress}</div>
                  <div className="business-apt-num">{invoiceData.business.apt}</div>
                  <div className="business-city-state-zip">{invoiceData.business.cityStateZip}</div>
                  <div className="business-country">{invoiceData.business.country}</div>
              </div>
            </div>
          </div>
        </section>
        <hr/>
        <section className="billing-area">
          <div className="invoice-billing-info">
            <table>
              <tbody>
                <tr>
                  <td><div>Bill to:</div></td>
                  <td><strong>Invoice number:</strong></td>
                  <td>{invoiceData.number}</td>
                </tr>
                <tr>
                  <td>
                    <strong className="billing-name">
                      {invoiceData.billing.name}
                    </strong>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className="street-address">
                      {invoiceData.billing.streetAddress}
                    </div>
                  </td>
                  <td>
                    <strong>Invoice date:</strong>
                  </td>
                  <td>{invoiceData.billing.dateCreated}</td>
                </tr>
                <tr>
                  <td>
                    <div className="apt-num">
                      {invoiceData.billing.apt}
                    </div>
                  </td>
                  <td><strong>Due date:</strong></td>
                  <td>{invoiceData.billing.dueDate}</td>
                </tr>
                <tr>
                  <td>
                    <div className="city-state-zip">
                      {invoiceData.billing.cityStateZip}
                    </div>
                  </td>
                  <td><strong>Your P.O./S.O.:</strong></td>
                  <td>{invoiceData.billing.pobox}</td>
                </tr>
                <tr>
                  <td>
                    <div className="country">
                      {invoiceData.billing.country}
                    </div>
                  </td>
                  <td><strong>Amount due:</strong></td>
                  <td>{invoiceData.billing.amountDue}</td>
                </tr>
                <tr>
                  <td>
                    <div className="email">
                      {invoiceData.billing.email}
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <hr/>
        <section className="product-area">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                invoiceData.products.map(function(product, index) {
                  return (
                    <tr key={product.name + index}>
                      <td className="product-title">
                        <strong className="product-name">
                          {product.name}
                        </strong>
                        <div className="product-desc">
                          {product.description}
                        </div>
                      </td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                      <td>{product.amount}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          <br/>
        </section>
        <section className="cost-area">
          <div className="memo-box">
            <strong>Memo</strong>
            <p className="memo-text">{invoiceData.memo}</p>
          </div>
          <div className="totals-box">
            <table>
              <tbody>
                <tr>
                  <td><strong>Subtotal:</strong></td>
                  <td>{invoiceData.totals.subtotal}</td>
                </tr>
                <tr>
                  <td>
                    <strong>{invoiceData.totals.tax.name}</strong>
                    <span>{invoiceData.totals.tax.number}</span>
                    <span>:</span>
                  </td>
                  <td>{invoiceData.totals.tax.amount}</td>
                </tr>
                <tr>
                  <td><strong>Total</strong>:</td>
                  <td><strong>{invoiceData.totals.total}</strong></td>
                </tr>
                <tr>
                  <td><strong>Payments:</strong></td>
                  <td>{invoiceData.totals.payments}</td>
                </tr>
                <tr>
                  <td><strong>Total paid</strong>:</td>
                  <td>{invoiceData.totals.totalPaid}</td>
                </tr>
                <tr>
                  <td><strong>Amount due:</strong></td>
                  <td>{invoiceData.totals.amountDue}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
    return (
      <div className="invoices-main">
        <Panel panelTitle={'Invoice #' + invoiceData.uuid} 
               panelBody={panelBody}/>
      </div>
    );
  }
});
