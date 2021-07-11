import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import useFetch from '../useFetch';


const Test = () => {
    const api_url = "https://cloud.iexapis.com/stable/stock/market/list/gainers?token=sk_1ea09097cb9a4f718df341d3105e1656";
    const {data, error, isPending} = useFetch(api_url);
    const id = 0;

    useEffect((data) => {
        console.log(data);
    },[])

    // useEffect(() => {
    //     const {data, error, isPending} = useFetch(api_url);

    // }, [data])
    return ( 
        <div>
            <h1> Test Page</h1>
            { isPending && <div> Loading...</div> }
            { error && <div>{ error }</div>}
            {data && (
                <article>
                    <h2>{ data[id].companyName }</h2>
                    <p>Price:  { data[id].latestPrice } </p>
                    <p>Percent Change: { (data[id].changePercent)*100}%</p>
                </article>
            
            )}
        </div>
        

     );
}
 
export default Test;