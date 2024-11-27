import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CategoriesPage(){

    const [categories,setCategories] = useState([])

    useEffect(
        ()=>{
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/category").then(
                (res)=>{
                    setCategories(res.data.categories)
                }
            )
        },[]
    )

    // const categories = [
    //     {
    //         name: "Electronics",
    //         price: 299.99,
    //         features: ["Durable", "Portable", "Energy-efficient"],
    //         description: "High-quality electronic gadgets.",
    //         image: "https://via.placeholder.com/50",
    //     },
    //     {
    //         name: "Furniture",
    //         price: 499.99,
    //         features: ["Elegant", "Sturdy", "Eco-friendly"],
    //         description: "Modern and stylish furniture for your home.",
    //         image: "https://via.placeholder.com/50",
    //     },
    //     {
    //         name: "Clothing",
    //         price: 59.99,
    //         features: ["Comfortable", "Trendy", "Affordable"],
    //         description: "Fashionable clothing for all seasons.",
    //         image: "https://via.placeholder.com/50",
    //     },
    // ];

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Category Table</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
            <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Price ($)</th>
                <th className="border border-gray-300 px-4 py-2">Features</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
            </tr>
            </thead>
            <tbody>
            {categories.map((category, index) => (
                <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{category.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                    {category.price.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                    <ul>
                    {category.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                    ))}
                    </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                    {category.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                    <img
                    src={category.image}
                    alt={category.name}
                    className="w-12 h-12 object-cover"
                    />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}
