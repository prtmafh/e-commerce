import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products')
            .then((response) => setProducts(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <div 
                    key={product.id} 
                    className="border p-4 rounded flex flex-col items-stretch justify-between h-80 mb-14"
                >
                    <img 
                        src={`/storage/${product.image}`} 
                        alt={product.name} 
                        className="w-full h-56 object-cover rounded mb-2" 
                    />
                    <div className="flex-grow">
                        <h2 className="font-bold text-center">{product.name}</h2>
                        <p className="text-sm text-gray-600 text-center">{product.description}</p>
                        <p className="font-semibold text-center">Rp{product.price}</p>
                    </div>
                    <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
