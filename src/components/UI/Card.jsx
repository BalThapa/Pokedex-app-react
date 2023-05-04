import React from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css"



const Card = ({ image, name }) => {
  return (
    <div className={'cards'}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <Link to={name}>See more</Link>
    </div>
  );
};

export default Card;