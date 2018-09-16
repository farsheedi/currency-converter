import * as React from "react";

export default class SecondComponent extends React.Component <{}> {
        
        public render() {
                return (
                        <div className="centreText">
                        // @ts-ignore
                              {this.props.currency1} 
                        </div>
                );
        }

        
}