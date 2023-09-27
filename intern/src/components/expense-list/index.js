import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Card from "./card";
import "./expense-list.css";
import axios from 'axios';
const ExpenseList = () => {
  const [customerList, setCustomerList] = useState([]);

  useEffect(() => {
    // Fetch the list of customers when the component mounts
    axios.get('https://restaurant-teac.onrender.com/api/v1/')
      .then(response => {
        setCustomerList(response.data.customers);
      })
      .catch(error => {
        console.error(error);
      });
    // console.log(customerList.customers[0].name);
  }, []);


  var total = 0;
  // console.log(filteredList.then());
  const notifySuccess = () => toast.success("Expense Deleted!");
  return (
    <div className="customer-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {customerList.length ? (
        customerList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">

          <label>Uh Oh! No customers.</label>
        </div>
      )}
      {/* <div className="total">
        Total : 
        {filteredList.map((item) => {
         total+=item.amount
        })}
         {total}
      </div> */}
    </div>
  );
};

export default ExpenseList;
