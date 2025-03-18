import React from 'react'
import  { useState, useEffect } from "react";

const Admin = () => {
     
    const [products, setProducts] = useState(() => {
        return JSON.parse(localStorage.getItem("products")) || [];
      });
    
      const [newProduct, setNewProduct] = useState("");
      const [editIndex, setEditIndex] = useState(null);
      const [editValue, setEditValue] = useState("");
    
      // Save to localStorage when products change
      useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
      }, [products]);
    
      // Add a new product
      const addProduct = () => {
        if (newProduct.trim() === "") return;
        setProducts([...products, newProduct]);
        setNewProduct("");
      };
    
      // Enable edit mode
      const startEdit = (index) => {
        setEditIndex(index);
        setEditValue(products[index]);
      };
    
      // Save edited product
      const saveEdit = () => {
        const updatedProducts = [...products];
        updatedProducts[editIndex] = editValue;
        setProducts(updatedProducts);
        setEditIndex(null);
      };
    
      // Remove a product
      const removeProduct = (index) => {
        setProducts(products.filter((_, i) => i !== index));
      };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Product List</h2>

      {/* Add Product Form */}
      <div className="flex gap-2 mb-4">
        <input
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          placeholder="Enter product name"
        />
        <button onClick={addProduct}>Add</button>
      </div>

      {/* Product List */}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        products.map((product, index) => (
          <div key={index} className="mb-2 p-2 flex justify-between">
            <div>
              {editIndex === index ? (
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
              ) : (
                <span>{product}</span>
              )}
            </div>

            <div className="flex gap-2">
              {editIndex === index ? (
                <button onClick={saveEdit} size="sm">Save</button>
              ) : (
                <button onClick={() => startEdit(index)} size="sm">Edit</button>
              )}
              <button onClick={() => removeProduct(index)} size="sm" variant="destructive">Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
  


export default Admin