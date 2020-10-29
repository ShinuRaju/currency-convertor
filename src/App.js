import React,{useEffect, useState} from  'react'
import './App.css';
import CurrencyRow from './component/CurrencyRow';
import axios from 'axios'


function App() {

  const BASE_URL = "https://api.exchangeratesapi.io/latest";

  const [currencyoptions, setcurrencyoptions] = useState([]);
  const [fromCurrency, setfromCurrency] = useState();
  const [toCurrency, settoCurrency] = useState();
  const [exchangeRate, setexchangeRate] = useState()
  const [amount, setamount] = useState(1);
  const [amountInFromCurrency, setamountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate
  }
  else{
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }



  useEffect(() => {
     
    const fetchitem = async () => {
      const result = await axios (BASE_URL)
      // console.log(result.data);
      const firstCurrency = Object.keys(result.data.rates)[1];
      setcurrencyoptions([result.data.base, ...Object.keys(result.data.rates)]);
       setfromCurrency(result.data.base);
       settoCurrency(firstCurrency);
       setexchangeRate(result.data.rates[firstCurrency])
    }

    fetchitem();
    
  
  }, [])

  useEffect(() => {
    
    if (fromCurrency != null && toCurrency != null) {
      const fetchitem = async () => {
        const modifiedresult = await axios(
          `${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`
        );
        setexchangeRate(modifiedresult.data.rates[toCurrency]);
      };

      fetchitem();
    }
    

  }, [fromCurrency, toCurrency])


  const handleFromAmountChange = (e) => {
    setamount(e.target.value)
    setamountInFromCurrency(true)
  };

  const handleToAmountChange = (e) => {
    setamount(e.target.value);
    setamountInFromCurrency(false);
  };

  return (
    
    <div className="main-wrapper">
      <h1>Currency Convertor</h1>
      <CurrencyRow
        onchangeAmount={handleFromAmountChange}
        currencyoptions={currencyoptions}
        amount={fromAmount}
        selectCurrency={fromCurrency}
        onChangeCurrency={(e) => {
          setfromCurrency(e.target.value);
        }}
      />
      <div className="equals">=</div>
      <CurrencyRow
        onchangeAmount={handleToAmountChange}
        currencyoptions={currencyoptions}
        selectCurrency={toCurrency}
        amount={toAmount}
        onChangeCurrency={(e) => {
          settoCurrency(e.target.value);
        }}
      />
    </div>
    
  );
}

export default App;
