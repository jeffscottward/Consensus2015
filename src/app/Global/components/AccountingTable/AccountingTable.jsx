// Modules
import React from 'react/addons';

export default React.createClass({

  createRows() {
    this.rows = [];

    var runningTotal = 0;

    for (var i = 0; i < this.props.payload.length; i++) {

      var currentPayloadItem = this.props.payload[i];
      runningTotal += Number(currentPayloadItem.value);

      this.rows.push(
        <tr key={i}>
          <td className="date-item">{currentPayloadItem.date}</td>
          <td className="account-item">{currentPayloadItem.account}</td>
          <td className="payee-item">{currentPayloadItem.payee}</td>
          <td className="value-item">{currentPayloadItem.value}</td>
          <td className="sum-item">{runningTotal}</td>
          <td className="token-item">{currentPayloadItem.token}</td>
        </tr>
      );
    }
  },

  render() {
    this.createRows();
    return (
      <table>
        <thead>
          <tr>
            <td className="date-header">Date</td>
            <td className="account-header">Account</td>
            <td className="payee-header">Payee</td>
            <td className="value-header">Value</td>
            <td className="sum-header">Sum</td>
            <td className="token-header">Token</td>
          </tr>
        </thead>
        <tbody>{this.rows}</tbody>
      </table>
    );
  }
});
