import { useState } from "react";
import useFetch from "./useFetch";

const CreateJson = () => {
    const[companySymbol, setCompanySymbol] = useState('');
    const[companyName, setCompanyName] = useState('');
    const[latestPrice, setLatestPrice] = useState(0);
    const[marketCap, setMarketCap] = useState(0);
    const[isPending, setIsPending] = useState(false);
    const[percentChange, setPercentChange] = useState(0);

    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { 
            companySymbol, companyName, latestPrice,  
            marketCap, isPending, percentChange
        };

        setIsPending(true);

        fetch('http://localhost:3000/gainers', {
            method: 'POST',
            headers: { "Content-Type":"application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('data added successfully');
            setIsPending(false);
        })
    }
    return ( 
        <div className="create-json">
            <h2>Data added</h2>
            {setData(useFetch("https://cloud.iexapis.com/stable/stock/market/list/gainers?token=sk_1ea09097cb9a4f718df341d3105e1656"))}
        </div>
     );
}
 
export default CreateJson;