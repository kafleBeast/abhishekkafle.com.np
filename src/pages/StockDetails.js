import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useFetch from '../useFetch';
import * as ReactBootStrap from "react-bootstrap";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './App.css';

const useStyles = makeStyles({
    table: {  
      width:650,
    },
});

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
    const classes = useStyles();

    const [name, setName] = useState('aapl');
    const [keyStatsButton, setKeyStatsButton] = useState(true);
    const [analystsButton, setAnalystsButton] = useState(false);
    const [newsButton, setNewsButton] = useState(false);
    const [profileButton, setProfileButton] = useState(false);

    const keyStatsUrl = "https://cloud.iexapis.com/stable/time-series/REPORTED_FINANCIALS/" + name +"?token=sk_9469d565ae4c4fc491b16ca8767d8a1e";
    const newsSentimentUrl = "https://finnhub.io/api/v1/news-sentiment?symbol=" + name + "&token=c3e7in2ad3ief4elcsn0";
    const newsUrl = "https://cloud.iexapis.com/stable/stock/" + name + "/news?token=sk_9469d565ae4c4fc491b16ca8767d8a1e";
    const profileUrl = "https://cloud.iexapis.com/stable/stock/aapl/company?token=sk_9469d565ae4c4fc491b16ca8767d8a1e";

    const {data: keyStats, error: errKeyStats, isPending: isPendingKeyStats} = useFetch(keyStatsUrl);
    const {data: newsSentiment, error: errNewsSentiment, isPending: isPendingNewsSentiment} = useFetch(newsSentimentUrl);
    const {data: news, error: errNews, isPending: isPendingNews} = useFetch(newsUrl);
    const {data: profile, error: errProfile, isPending: isPendingProfile} = useFetch(profileUrl);

    const keyStatsButtonControl = (e) => {
        e.preventDefault();
        setKeyStatsButton(true);
        setAnalystsButton(false);
        setNewsButton(false);
        setProfileButton(false);
    }
    const analystsButtonControl = (e) => {
        e.preventDefault();
        setKeyStatsButton(false);
        setAnalystsButton(true);
        setNewsButton(false);
        setProfileButton(false);
    }
    const newsButtonControl = (e) => {
        e.preventDefault();
        setKeyStatsButton(false);
        setAnalystsButton(false);
        setNewsButton(true);
        setProfileButton(false);
    }
    const profileButtonControl = (e) => {
        e.preventDefault();
        setKeyStatsButton(false);
        setAnalystsButton(false);
        setNewsButton(false);
        setProfileButton(true);
    }
    // console.log(tempKeyStats);
    // let keyStats = [];
    // tempKeyStats && keyStats.push(tempKeyStats);
    // console.log(keyStats);

    const renderKeyStats = (stock, index) => {
        // console.log('test' + stock);
        return(
            <tr key = {index}>
                <td>{stock.CostOfRevenue}</td>
                <td>{stock.CommonStockDividendsPerShareDeclared}</td>
                <td>{stock.CommonStockSharesOutstanding}</td>
                <td>{stock.EarningsPerShareBasic} </td>
                <td>{stock.EarningsPerShareDiluted}</td>
                <td>{stock.GrossProfit}</td>
                <td>{stock.NetIncomeLoss}</td>
                <td>{stock.OperatingExpenses}</td>
                <td>{stock.SalesRevenueNet}</td>
                <td>{stock.NetIncomeLoss}</td>

            </tr>
        );
    };

    const renderNewsSentiment = (stock, index) =>{
        return(
            <tr key = {index}>
                <td>{stock.articlesInLastWeek}</td>
                <td>{stock.sectorAverageBullishPercent}</td>
                <td>{stock.bullishPercent}</td>
            </tr>
        );
    }

    const renderNews = (stock, index) =>{
        return(
            <tr key = {index}>
                <td>{stock.headline}</td>
                <td>{stock.summary}</td>
                <td>{stock.url}</td>
            </tr>
        );
    }
    return (
        <div className="stock-details"> 
            <h1 className="stockDetails-title">Stock Details</h1> 
            <div id="candle-graph" className="test-div"> <h3>Candle graph</h3></div>

            <div className="stockDetails-contentTitles">
                <div className="stockDetails-button" >
                    <BootstrapButton variant="outlined" color="primary" onClick={keyStatsButtonControl}> Keystats  </BootstrapButton>
                </div>
                <div id="analysts" className="stockDetails-button">
                    <BootstrapButton variant="outlined" color="primary" onClick={analystsButtonControl}> Analysts  </BootstrapButton>
                </div>
                <div id="news" className="stockDetails-button">
                    <BootstrapButton variant="outlined" color="primary" onClick={newsButtonControl}> News  </BootstrapButton>
                </div>
                <div id="profile" className="stockDetails-button">
                    <BootstrapButton variant="outlined" color="primary" onClick={profileButtonControl}> Profile </BootstrapButton>
                </div>
            </div>
            <div className="stockDetails-contents">
                {keyStatsButton && <ReactBootStrap.Table hover bordered size="md">
                    <thead>
                        <tr>
                        <th>Cost of Revenue</th>
                        <th>Dividends per Share</th>
                        <th>Common Shares Outstanding</th>
                        <th>Earnings per Share Basic</th>
                        <th>Earnings per Share Diluted</th>
                        <th>Gross Profit</th>
                        <th>Net Income Loss</th>
                        <th>Operating Expenses</th>
                        <th>Net Sales Revenue</th>
                        <th>Net Income Loss</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody className="gainersTable">
                        {(isPendingKeyStats) && <div> Loading... </div>}
                        {errKeyStats && <div> { errKeyStats } </div>}
                        {keyStats && keyStats.map(renderKeyStats)}
                    </tbody>
                </ReactBootStrap.Table>}

                {newsButton && <ReactBootStrap.Table hover bordered size="md">
                    <thead>
                        <tr>
                        <th>Headline</th>
                        <th>Summary</th>
                        <th>URL</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody className="gainersTable">
                        {(isPendingNews) && <div> Loading... </div>}
                        {errNews && <div> { errNews } </div>}
                        {news && news.map(renderNews)}
                    </tbody>
                </ReactBootStrap.Table>}
                

                {console.log(news)}

                
            </div>

        </div>
        
    )
}

export default StockDetails
