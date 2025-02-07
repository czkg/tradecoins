// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import CryptoTracker from "./components/CryptoTracker.jsx";

function App() {
    return (
        <div>
            <h1>My Dashboard</h1>
            <CryptoTracker symbol="BTC" />
        </div>
    );
}

export default App;
