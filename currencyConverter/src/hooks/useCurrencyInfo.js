 //yahaan hum apna khud ka hook banaayenge, we can use inbuilt hooks for designing our own hook 
 import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) //isme maine jo output the API ka usko json format mei convert kar liya hai
        .then((res) => setData(res[currency])) //jo bhi currency hogi uska data set ho jaayega
        console.log(data);
    }, [currency])
    console.log(data);
    return data //humko to [data,setData] return karna chahiye tha per hum aisa nahin kar rahe hain kyun ki humne neeche export default karke poora method hi return kar diya hai to uske through humko sab cheez ki access mil jaayegi
}

export default useCurrencyInfo;