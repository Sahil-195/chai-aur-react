import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo(currency) {
    const [data, SetData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.7.22/v1/currencies/${currency}.json`)
           .then(response => response.json())
           .then(response => SetData(response[currency]));
    }, [currency]);
    // console.log(data);
    return data;
}

export default useCurrencyInfo;