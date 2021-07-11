import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
    root: {
      backgroundColor: '#f7aaaa',
      color: 'white',
      '&:hover': {
        backgroundColor: '#f75f5f',
        borderRadius: '1px',
      },
    },
  })(Button);


const StockDetails = () => {
    return (
        <div className="stock-details"> 
            <h1 className="stockDetails-title">Stock Details</h1> 
            <div id="candle-graph" className="test-div"> <h3>Candle graph</h3></div>

            <div className="stockDetails-contentTitles">
                <div className="stockDetails-button" >
                    <BootstrapButton variant="outlined" color="primary"> Keystats  </BootstrapButton>
                </div>
                <div id="analysts" className="stockDetails-button">
                    <BootstrapButton variant="outlined" color="primary"> Analysts  </BootstrapButton>
                </div>
                <div id="news" className="stockDetails-button">
                    <BootstrapButton variant="outlined" color="primary"> News  </BootstrapButton>
                </div>
                <div id="profile" className="stockDetails-button">
                    <BootstrapButton variant="outlined" color="primary"> Profile </BootstrapButton>
                </div>
            </div>
            <div className="stockDetails-contents"></div>

        </div>
        
    )
}

export default StockDetails
