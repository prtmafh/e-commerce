import React, { useState } from "react";
import axios from "axios";
import { Head, Link } from "@inertiajs/react";

const AddProduct = () => {
    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: null,
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm({
            ...form,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(form).forEach((key) => {
            formData.append(key, form[key]);
        });

        try {
            const response = await axios.post("/api/products", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
             if (response.data.redirect) {
            window.location.href = response.data.redirect; // Redirect ke route home
            } else {
                setMessage(response.data.message);
                setForm({ name: "", description: "", price: "", stock: "", image: null });
            }
        } catch (error) {
            setMessage("Failed to add product");
        }
    };

    return (
        <div className="add-product bg-white shadow-sm sm:rounded-lg p-6">
            {/* <h3 className="text-lg font-bold mb-4">Add Product</h3> */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add Product
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded ms-3">
                    <Link
                        href={route('home')}
                        active={route().current('home')}
                    >
                    Back
                    </Link>
                </button>
            </form>
            {message && <p className="mt-4 text-green-500">{message}</p>}
        </div>
    );
};

export default AddProduct;
