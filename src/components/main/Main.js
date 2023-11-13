import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../redux/cardsSlice';
import './Main.css';
import { Link, useNavigate } from 'react-router-dom';


function Main() {
  const dispatch = useDispatch();
  const deals = useSelector((state) => state.deals.value);
  const [newCardTitle, setNewCardTitle] = useState('');
  console.log(deals);

  const handleCreateDeal = () => {
    const cardData = {
      title: newCardTitle || 'Home Deal',
    };

    dispatch(addCard(cardData));
    setNewCardTitle('');
  };

  const navigate = useNavigate()

  return (
    <div>
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
          />
        </div>
        <div className="content">
          <h3>Deal</h3>
          <p>Your deals are shown here</p>
        </div>
        <div className="button-container">
          <Link to="/DealForm">Create a Deal</Link>
        </div>
      </div>

      
      {/* this is a card in which form data is show from DealForm */}
      <div className="div1">  
        {deals.map((deal, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <button className="card-button">Attach</button>
              <h4>{deal.name}</h4>
              
              <div className="time">
                <img id="clock" src="/clock.svg" alt="Time Icon" />
                <p>{deal.duration}</p>
              </div>
              <p className="price"> Price: {deal.price}$</p>
              
              <div className="card-buttons">
                <button className="update-button">Update</button>
                <button className="disable-button">Disable</button>
              </div>
            </div>
            <div>
              <img src="/card1.svg" alt="Big Image" className="card-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
