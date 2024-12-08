import React, { useState } from 'react';
import Products from '@/Components/Products';





const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
    const handleCheckout = async () => {
        try {
            await axios.post('/api/checkout', {
                customer_name: 'John Doe',
                cart: cart,
                total_price: cart.reduce((total, item) => total + item.price * item.quantity, 0),
            });
            alert('Order placed successfully!');
            setCart([]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {/* <h1 className="text-2xl font-bold mb-4">E-Commerce App</h1> */}
            <Products addToCart={addToCart} />
            <h2 className="text-xl font-bold mt-10">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="border p-2 mb-2">
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Subtotal: Rp{item.price * item.quantity}</p>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded mt-2 me-3"
                            >
                                Remove
                            </button>
                            <button
                                onClick={handleCheckout}
                                className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                            >
                                Checkout
                            </button>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
