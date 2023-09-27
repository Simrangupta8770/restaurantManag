import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./add-form.css";
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
const AddForm = () => {

  const [categoryOpen, setCategoryOpen] = useState(false);
  const location = useLocation();
  const data = location.state;
  console.log(data);

  const [category, setCategory] = useState();



  const [orders, setOrders] = useState(data ? data.order : []);
  const [itemsDropdown, setItemsDropdown] = useState(['Burger', 'Pizza', 'Pasta', 'Salad']);
  const price = { Burger: 250, Pizza: 300, Pasta: 400, Salad: 150 };
  const [item, setItem] = useState("");
  const [name, setName] = useState(data ? data.name : "");
  const [tot, setTot] = useState(data ? data.tot : 0);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const addItem = () => {
    if (category == null || qty == 0 || name == "") {
      return;
    }
    const already = orders.find(a => a.item == category);
    //console.log(already);
    if (already) {
      // console.log(already);
      const newOrders = orders.map(a => {
        var returnValue = { ...a };
        const prev = returnValue.price;
        console.log(tot);
        if (a.item == category) {
          returnValue.quantity = qty;
          returnValue.price = qty * price[category];
        }
        setTot(tot - prev + returnValue.price);
        console.log(returnValue.price);
        return returnValue;

      })
      setOrders(newOrders);

    } else {
      const newOrders = [...orders, { item: category, quantity: qty, price: qty * price[category] }];
      setOrders(newOrders);
      setTot(tot + qty * price[category]);
    }
    //console.log(orders);
    // const newOrders = orders.map(a => {
    //   var returnValue = {...a};

    //   if (a.name == category) {
    //     returnValue.qty = qty;
    //   }

    //   return returnValue;
    // })

    setCategory();
    setQty(1);
  };
  const handleItemEdit = (name, qt) => {

    setCategory(name);
    setQty(qt);
  }


  const handleItemChange = (cat) => {

    setCategory(cat);
    setCategoryOpen(false);
    //console.log(category);

  };

  const handleQuantityChange = (value) => {


    setQty(value);
  };

  const updateItemsDropdown = (selectedItem) => {
    const updatedDropdown = itemsDropdown.filter(item => item !== selectedItem);
    setItemsDropdown(updatedDropdown);
  };

  const comItem = () => {
    const d = {
      name: name,
      order: orders,
      tot: tot,
      createdAt: data ? data.createdAt : Date.now()
    }
    axios.post('https://restaurant-teac.onrender.com/api/v1/add', d)
      .then(response => {
        // Update the customer list with the new data
        setOrders([]);
        setTot(0);
        setName("");
        navigate('/');
        // Reset the newCustomer state

      })
      .catch(error => {
        console.error(error);
      });

  }

  return (
    <>
      <div className="add-form">
        <label>Customer Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <div className="category-item">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qnty</th>
                <th>Price</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.item}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  <td>
                    <button type="button" className="form-add-button" onClick={() => handleItemEdit(order.item, order.quantity)} >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category : "Order Items"}</label>
            <i class="fi-rr-angle-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {itemsDropdown.map((category, i) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px black` }}
                  key={i}
                  onClick={() => handleItemChange(category)}
                >
                  <label>{category}</label>

                </div>
              ))}
            </div>
          )}


          <input
            type="number"
            value={qty}
            onChange={(e) => handleQuantityChange(e.target.value)}
            min="1"
          />

          {orders.length != 4 &&
            <button className="form-add-button" onClick={addItem}>Add Item</button>}
        </div>
        <button className="form-add-button" onClick={comItem}>Make Changes</button>

      </div>

    </>
  );
};

export default AddForm;
