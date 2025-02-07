import React, {useState, useEffect} from 'react';

const CryptoTracker = ({symbol}) => {
    const [price, setPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/prices`);
                const data = await response.json();
                setPrice(data.price);
            } catch (error) {
                console.error("Error fetching price:", error);
            }
        };
        fetchPrice();
    }, [symbol]);

    return (
        <div>
            <h3>
                {symbol} Price: {price ? `$${price}` : "Loading..."}
            </h3>
        </div>
    );
};

export default CryptoTracker;