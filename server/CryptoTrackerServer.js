const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

//Convert crypto symbol for Kraken API format (e.g., BTC -> XBT)
const getKrakenSymbol = (symbol) => {
    const mapping = {BTC: "XBT", ETH: "ETH", SOL: "SOL", USDT: "USDT"};
    return mapping[symbol.toUpperCase()] || symbol.toUpperCase();
};

//Fetch price from Kraken API
app.get("api/prices", async (req, res) => {
    try {
        const symbol = getKrakenSymbol(req.params.symbol);
        const response = await axios.get(`https://api.kraken.com/0/public/Ticker?pair=XBTUSD`);
        const price = response.data.result[`XXBTZUSD`]?.c[0];

        if(!price) throw new Error("Invalid response from Kraken API");
        res.json({symbol, price});
    } catch (error) {
        res.status(500).send({error: error.message});
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));