import React from 'react';
import "./depositForm.css";

function DepositForm() {
  return (
    <div className="deposit-form-container">
    <h2 className="form-title">Deposits</h2>
    <div className="bottom">
    <div className='deposit'>
      <p className="date">Date</p>
      <p className="amount">Amount</p>
    </div>
    <div className='deposit'>
      <p className="date">02/03/2023</p>
      <p className="amount">$3000</p>
    </div>
    <div className='deposit'>
      <p className="date">02/03/2023</p>
      <p className="amount">$3000</p>
    </div>
    <div className='deposit'>
      <p className="date">02/03/2023</p>
      <p className="amount">$3000</p>
    </div>
    </div>
  </div>
  )
}

export default DepositForm