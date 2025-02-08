// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import CryptoTracker from './components/CryptoTracker.jsx';

import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    // const [prices, setPrices] = useState({});
    // useEffect(() => {
    //     const fetchPrices = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:3000/api/crypto/symbol`);
    //             setPrices(response.data.result);
    //         } catch (error) {
    //             console.error("Error fetching prices", error);
    //         }
    //     };
    //     fetchPrices();
    // }, []);

    return (
        <div>
            <h1>Crypto Price Tracker</h1>
            <CryptoTracker symbol="BTC" />
        </div>
    );
}

export default App;
