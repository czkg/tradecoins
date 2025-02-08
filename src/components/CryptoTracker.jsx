import React, {useState, useEffect} from 'react';

const CryptoTracker = ({symbol}) => {
    const [price, setPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/crypto/symbol`);
                //const data = await response.json();
                //const data = response.data;
                setPrice(response.data.result.XXBTZUSD.c[0]);
            } catch (error) {
                console.error("Error fetching price:", error);
            }
        };
        fetchPrice();
    }, []);

    return (
        <div>
            <h3>{symbol} Price: {price ? `$${price}` : "Loading..."}</h3>
        </div>
    );
};

export default CryptoTracker;