require('./SidebarNavigation.css');

// Modules
import React  from 'react/addons';
import Router from 'react-router-component';


// Router Link Component
var Link = Router.Link;

export default React.createClass({
  render() {
    return (
      <nav className={'sidebar-navigation' + ' ' + this.props.currentFreature}>
        <ul>
          <li className="accounting">
            <Link href="/accounting​"><i className="fa fa-calculator"></i> Accounting​</Link>
          </li>
          <li className="auditing">
            <Link href="/auditing"><i className="fa fa-connectdevelop"></i> Auditing</Link>
          </li>
          <li className="invoices">
            <Link href="/invoices​"><i className="fa fa-envelope"></i>​ Invoices​</Link>
          </li>
          <li className="dashboard">
            <Link href="/dashboard​"><i className="fa fa-tachometer"></i>​ Dashboard​</Link>
          </li>
          <li className="transactions">
            <Link href="/transactions​"><i className="fa fa-exchange"></i>​ Transactions​</Link>
          </li>
          <li className="bills">
            <Link href="/bills​"><i className="fa fa-files-o"></i>​ Bills​</Link>
          </li>
          <li className="receipts">
            <Link href="/receipts​"><i className="fa fa-file"></i>​ Receipts​</Link>
          </li>
          <li className="reports">
            <Link href="/reports​"><i className="fa fa-file-text"></i>​ Reports​</Link>
          </li>
          <li className="payroll">
            <Link href="/payroll​"><i className="fa fa-money"></i>​ Payroll​</Link>
          </li>
        </ul>
      </nav>
    );
  }
});
