import React, {useState, useEffect} from 'react';
import axios from 'axios';

function API ({darkMode}) {
    const [prices, setPrices] = useState([])


    useEffect(() => {
        const access_key ='3xr2gl79h2mizc2a9cy25cw1epioqjpxu2pm90jh9ymxis8ilucmcfo0y359'
        axios.get(`https://metals-api.com/api/latest?access_key=${access_key}&symbols=XAU,XAG`).then(res => {
        console.log(res.data)   
        setPrices(res.data)})
        .catch(err => {
            console.log(err)
        })
        

    }, [])

    
    return(
        <main className={darkMode ? "dark-mode" : "light-mode"} >
        <div style={{textAlign: "center", marginTop: "10%"}}> Current price of gold: {prices.rates && (1/prices.rates.XAU)} USD</div>
        <div style={{textAlign: "center", marginTop: "2%" }}> Current price of silver: {prices.rates && (1/prices.rates.XAG)} USD</div>
        </main>
    )
}

export default API;