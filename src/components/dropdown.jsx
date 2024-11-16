import React, { useState } from 'react';

function Dropdown() {
  const [currency, setCurrency] = useState('Naira');
  
  const options = ['Naira', 'USD', 'Pounds'];
  
  const dropdownOptions = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
  
  function handleCurrencyChange(event) {
    setCurrency(event.target.value);
  }
  
  return (
    <div style={{border:'0px;solid;green'}}>
      
      <select id="currency-dropdown" value={currency} onChange={handleCurrencyChange}>
        {dropdownOptions}
      </select>
      
    </div>
  );
}

export default Dropdown;
