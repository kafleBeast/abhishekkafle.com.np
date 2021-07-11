import React from 'react'
import { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import useFetch from '../useFetch';


const Screener = ({showSidebar}) => {

    const[name, setName] = useState('');
    const[region, setRegion] = useState('');
    const[exchange, setExchange] = useState('');

    const[lowMarketCap, setLowMarketCap] = useState(null);
    const[highMarketCap, setHighMarketCap] = useState(null);

    const[lowPrice, setLowPrice] = useState(null);
    const[highPrice, setHighPrice] = useState(null);

    const[lowPercentChange, setLowPercentChange] = useState(null);
    const[highPercentChange, setHighPercentChange] = useState(null);

    const[lowPricePerEarnings, setLowPricePerEarnings] = useState(null);
    const[highPricePerEarnings, setHighPricePerEarnings] = useState(null);

    const[lowEarningsPerShare, setLowEarningsPerShare] = useState(null);
    const[highEarningsPerShare, setHighEarningsPerShare] = useState(null);

    const[lowDividends, setLowDividends] = useState(null);
    const[highDividends, setHighDividends] = useState(null);

    var url = "https://cloud.iexapis.com/stable/stock/" + name + "/quote?token=sk_9469d565ae4c4fc491b16ca8767d8a1e";
    // var url = "https://cloud.iexapis.com/stable/stock/twtr/quote?token=sk_9469d565ae4c4fc491b16ca8767d8a1e";

    const {data:tempdata, error, isPending} =  useFetch(url);
    // console.log(data);

    let data = [];

    tempdata && data.push(tempdata);

    // console.log(tempdata);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(()=>{

    },[name])

    const renderStock = (stock, index) => {
        console.log('test' + stock);
        return(
            <tr key = {index}>
                <td>{stock.symbol}</td>
                <td>{stock.latestPrice}</td>
                <td>{}</td>
                <td>{stock.changePercent * 100} %</td>
                <td>{stock.iexVolume}</td>
                <td>{stock.marketCap}</td>
                <td>{stock.peRatio}</td>
            </tr>
        );
    };

    return (
        <>
        <div className="screener" onClick={showSidebar}>
            <h1>Screener</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Region</label>
                <select
                    value={region}
                    onChange = {(e) => setRegion(e.target.value)}
                >
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                </select>

                <label>Exchange</label>
                <select
                    value={exchange}
                    onChange = {(e) => setExchange(e.target.value)}
                >
                    <option value="NASDAQ">NASDAQ</option>
                    <option value="NYSE">NYSE</option>
                    <option value="SSE">SSE</option>
                    <option value="HKEX">HKEX</option>
                    <option value="JPX">JPX</option>
                </select>

                <label>Market Cap</label>
                <input className="screenerInput"
                    type="text"
                    required
                    value={lowMarketCap}
                    onChange={(e) => setLowMarketCap(e.target.value)}
                />-to-
                <input className="screenerInput"
                    type="text"
                    required
                    value={highMarketCap}
                    onChange={(e) => setHighMarketCap(e.target.value)}
                />

                <label>Price</label>
                <input className="screenerInput"
                    type="text"
                    required
                    value={lowPrice}
                    onChange={(e) => setLowPrice(e.target.value)}
                />-to-
                <input className="screenerInput"
                    type="text"
                    required
                    value={highPrice}
                    onChange={(e) => setHighPrice(e.target.value)}
                />
                
                <label>Percent Change</label>
                <input className="screenerInput"
                    type="text"
                    required
                    value={lowPercentChange}
                    onChange={(e) => setLowPercentChange(e.target.value)}
                />-to-
                <input className="screenerInput"
                    type="text"
                    required
                    value={highPercentChange}
                    onChange={(e) => setHighPercentChange(e.target.value)}
                />

                <label>Price Per Earnings</label>
                <input className="screenerInput"
                    type="text"
                    required
                    value={lowPricePerEarnings}
                    onChange={(e) => setLowPricePerEarnings(e.target.value)}
                />-to-
                <input className="screenerInput"
                    type="text"
                    required
                    value={highPricePerEarnings}
                    onChange={(e) => setHighPricePerEarnings(e.target.value)}
                />

                <label>Earnings Per Share</label>
                <input className="screenerInput"
                    type="text"
                    required
                    value={lowEarningsPerShare}
                    onChange={(e) => setLowEarningsPerShare(e.target.value)}
                />-to-
                <input className="screenerInput"
                    type="text"
                    required
                    value={highEarningsPerShare}
                    onChange={(e) => setHighEarningsPerShare(e.target.value)}
                />

                <label>Dividends</label>
                <input className="screenerInput"
                    type="text"
                    required
                    value={lowDividends}
                    onChange={(e) => setLowDividends(e.target.value)}
                />-to-
                <input className="screenerInput"
                    type="text"
                    required
                    value={highDividends}
                    onChange={(e) => setHighDividends(e.target.value)}
                />
            </form>
        </div>

        <div className="vertical-line"></div>

        <div className="screener-content">
            <ReactBootStrap.Table hover size="md">
                <thead>
                    <tr>
                    <th>Symbol</th>
                    <th>Latest Price</th>
                    <th>Sparkline</th>
                    <th>Percent Change</th>
                    <th>Volume</th>
                    <th>Market Cap</th>
                    <th>P/E</th>
                    </tr>
                </thead>
                <tbody className="screenerContentTable">
                    {(isPending) && <div> Loading... </div>}
                    {error && <div> { error } </div>}
                    {data && data.map(renderStock)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
        </>
    )
}

export default Screener
