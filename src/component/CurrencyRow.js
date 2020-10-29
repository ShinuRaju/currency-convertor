import React from 'react'
import './CurrencyRow.css'

const CurrencyRow = (props) => {
  
  const {
    currencyoptions,
    selectCurrency,
    onChangeCurrency,
    amount,
    onchangeAmount,
  } = props;
  
  return (
    <div className="main-wrapper">
      <input type="number" name="" id="" value={amount} onChange = {onchangeAmount}/>
      <select
        name="currency"
        id=""
        onChange={onChangeCurrency}
        value={selectCurrency}
      >
        {currencyoptions.map((items) => (
          <option key={items} value={items}>
            {items}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow
