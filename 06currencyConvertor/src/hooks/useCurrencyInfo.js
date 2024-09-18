import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    useState [data, setData] = useState({})
    useEffect( ()=> {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then(()=> setData(res[currency]))
        console.log(data);

    },[currency])
    console.log(data);
    return data

}

export default useCurrencyInfo;