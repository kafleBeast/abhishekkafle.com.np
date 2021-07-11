import React, { useState} from 'react'
import useFetch from '../useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import Button from '@material-ui/core/Button';
import {  withStyles, makeStyles } from '@material-ui/core/styles';


import { green } from '@material-ui/core/colors';

// const finnhub = require('finnhub');
 
// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = "c3e7in2ad3ief4elcsn0" // Replace this
// const finnhubClient = new finnhub.DefaultApi()

const useStyles = makeStyles((theme) => ({
    button: {
        margin: '25px 100px 25px 100px',
        height: '230px',
        width: '230px',
        borderRadius: '230px',
    },
    buttonElement :{
        width:'110px',
        display:'flex',
        justifyContent:"flexStart",
        color:'white',
        fontSize:'1.5em',
    },
    buttonParent: {
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
    },
 

}));

  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(green[400]),
      backgroundColor: green[400],
      '&:hover': {
        backgroundColor: green[700],
        // border: '100px solid #66BB6A',

        borderRadius: '1px',
      },
    },
  }))(Button);

  const BootstrapButton = withStyles({
    root: {
      backgroundColor: '#FF5E5E',      
      '&:hover': {
        backgroundColor: 'red',
        // border: '100px solid #FF5E5E',

        borderRadius: '1px',
      },
    },
  })(Button);

 
const TopGainersLosers = ({ showSidebar }) => {

    const classes = useStyles();

    const [Gainersbtn, setGainersbtn] = useState(true);
    const [Losersbtn, setLosersbtn] = useState(false);

    const urlGainers = "https://cloud.iexapis.com/stable/stock/market/list/gainers?token=sk_9469d565ae4c4fc491b16ca8767d8a1e";
    const urlLosers = "https://cloud.iexapis.com/stable/stock/market/list/losers?token=sk_9469d565ae4c4fc491b16ca8767d8a1e";

    const{data:gainers, error:errGainers, isPending:isPendingGainers} = useFetch(urlGainers);
    const{data:losers, error:errLosers, isPending:isPendingLosers} = useFetch(urlLosers);

    console.log(gainers);
    const renderStock = (stock, index) => {
        return(
            <tr key = {index}>
                <td>{stock.symbol}</td>
                <td>{stock.latestPrice}</td>
                <td>{}</td>
                <td>{stock.change}</td>
                <td>{stock.changePercent * 100} %</td>
                <td>{stock.iexVolume}</td>
                <td>{stock.marketCap}</td>
            </tr>
        );
    };

    const gainerTableControl = (e) => {
        e.preventDefault();
        setGainersbtn(true);
        setLosersbtn(false);
    }

    const loserTableControl = (e) => {
        e.preventDefault();
        setLosersbtn(true);
        setGainersbtn(false);

    }

    return (
        <div className='container' onClick={showSidebar}>
            <div className={classes.buttonParent}>
            <ColorButton variant="outlined" color="primary" className={classes.button} onClick={gainerTableControl}> <div className={classes.buttonElement}> Gainers </div> </ColorButton>
            <BootstrapButton variant="outlined" color="primary" className={classes.button} onClick={loserTableControl}>  <div className={classes.buttonElement}>Losers  </div> </BootstrapButton>
            </div>
            {Gainersbtn && <ReactBootStrap.Table hover bordered size="md">
                <thead>
                    <tr>
                    <th>Symbol</th>
                    <th>Latest Price</th>
                    <th>Sparkline</th>
                    <th>Change</th>
                    <th>Percent Change</th>
                    <th>Volume</th>
                    <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody className="gainersTable">
                    {(isPendingGainers) && <div> Loading... </div>}
                    {errGainers && <div> { errGainers } </div>}
                    {gainers && gainers.map(renderStock)}
                </tbody>
            </ReactBootStrap.Table>}


            {Losersbtn && 
            <ReactBootStrap.Table hover bordered size="md">
                <thead>
                    <tr className="losersTableTitle">
                    <th>Symbol</th>
                    <th>Latest Price</th>
                    <th>Sparkline</th>
                    <th>Change</th>
                    <th>Percent Change</th>
                    <th>Volume</th>
                    <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody className="losersTable">
                    {(isPendingLosers) && <div> Loading... </div>}
                    {errLosers && <div> { errLosers } </div>}
                    {losers && losers.map(renderStock)}
                    {console.log(losers)}
                </tbody>
            </ReactBootStrap.Table>}
        </div>
    )
}

export default TopGainersLosers
