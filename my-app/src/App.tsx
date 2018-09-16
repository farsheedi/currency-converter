import * as React from 'react';
import './App.css';
import Form from './components/Form';

export default class App extends React.Component<{}>{


  state = {
    value: undefined,
    currency1: undefined,
    currency2: undefined,
    final_string: undefined
  }

    getCurrencyExchange = async (e: any) =>{

    e.preventDefault();

    const value = e.target.elements.value.value;
    const first_currency = e.target.elements.currency1.value;
    const second_currency = e.target.elements.currency2.value;

    const api_call = await fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+first_currency+'&to_currency='+second_currency+'&apikey=XNA16X50Z407EDZI')
    const data = await api_call.json();
    const exchangeRate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
    const output = value+ first_currency + " is " + exchangeRate*value + second_currency;


   this.setState({

     final_string: output as any
   })
  }


  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
        Enter the amount as well as the currency codes to convert!
          <Form 
          // @ts-ignore
          getCurrencyExchange = {this.getCurrencyExchange}/>
          <div>
          
            {
             // @ts-ignore
             this.state.final_string
            }

          </div>
        </div>
      </div>
    );
  }
}