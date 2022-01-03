import React, { useState } from 'react';
import './style.css';

export default function Form() {
  const [user, setUser] = useState({
    name: '',
    price: '',
    image: '',
  });

  const { name, price, image } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Please create your shopping list using below Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name : </label>
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label>Price : </label>
          <input
            onChange={handleChange}
            value={price}
            type="number"
            name="price"
            id="price"
            required
          />
        </div>
        <div>
          <label>Image (optional): </label>
          <input
            onChange={handleChange}
            value={image}
            type="image"
            alt="click to upload"
            name="image"
            id="image"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
