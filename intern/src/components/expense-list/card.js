import React from "react";
import "./card.css";
import moment from "moment";
import {Routes, Route, useNavigate,Link} from "react-router-dom";
const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const navigate = useNavigate();
  
  const handleMod = () => {
    navigate('/add-expense',{state :item});
  }
  const genReciept = () => {
    navigate('/receipt', { state: item });
  }
  return (
    <div
      className="card"
      style={{ border: `6px 6px 6px 6px solid black`, padding:'5px'}}
    >
      
    <div className="card-info">
        <label className="card-title">{item.name}</label>
        <label className="card-time">{time}</label>
        
        <Link to='/receipt' state={item}>
          Generate receipt

          </Link>
       
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">₹ {item.tot}</label>
        </div>
       
        <div className="delete-icon" onClick={handleMod}>
          <i class="fi-rr-edit"></i>
        </div>
      </div> 
      
    </div>
  );
};

export default Card;
