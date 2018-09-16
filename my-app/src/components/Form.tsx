import * as React from "react";

export default class Form extends React.Component { 
render(){
    return(
        // @ts-ignore
        <form onSubmit = {this.props.getCurrencyExchange}>
            <input type="text" name="value" placeholder= "Value..."/>
            <input type="text" name="currency1" placeholder= "Currency1..."/>
            <input type="text" name="currency2" placeholder= "Currency2..."/>
            <button>Exchange!</button>
        </form>
    )
}
}