import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDeal } from '../redux/DealSlice';
import "./DealForm.css"
import { Link, useNavigate } from 'react-router-dom';

function DealForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [dealData, setDealData] = useState({
    name: '',
    about: '',
    price: '',
    quantity: '',
    duration: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDealData({
      ...dealData,
      [name]: name === 'price' || name === 'quantity' ? parseInt(value, 10) : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();


    // console.log(dealData);

    dispatch(addDeal(dealData));

    setDealData({
      name: '',
      about: '',
      price: '',
      quantity: '',
      duration: '',
    });
    navigate("/")

  };

  return (
    <div className="form-container">
      <h1>Create Deal</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="deal-name">Deal Name:</label>
        <input
          type="text"
          id="deal-name"
          name="name"
          required
          value={dealData.name}
          onChange={handleInputChange}
        /><br />

        <label htmlFor="about-deal">About Deal:</label>
        <textarea
          id="about-deal"
          name="about"
          required
          value={dealData.about}
          onChange={handleInputChange}
        ></textarea><br />

        <label htmlFor="deal-price">Price of Deal:</label>
        <input
          type="number"
          id="deal-price"
          name="price"
          required
          value={dealData.price}
          onChange={handleInputChange}
        /><br />

        <label htmlFor="deal-quantity">Number of Deals:</label>
        <input
          type="number"
          id="deal-quantity"
          name="quantity"
          required
          value={dealData.quantity}
          onChange={handleInputChange}
        /><br />

        <label htmlFor="deal-duration">Duration of Deal:</label>
        <input
          type="datetime-local"
          id="deal-duration"
          name="duration"
          required
          value={dealData.duration}
          onChange={handleInputChange}
        /><br />
          <button className="create-deal-button" type="submit">
            Create Deal
          </button>
        <button className="previous-deal-button">Previous Deal</button>
      </form>
    </div>
  );
}

export default DealForm;
