import React from "react";
import GenReceipt from "../../components/expense-list/GenReceipt";
import TopFold from "../../components/top-fold";
import "../add-expense/add-expense.css";
const Receiptgen = () => {
  return (
    <div className="add-expense">
      <TopFold />
      <GenReceipt />
    </div>
  );
};

export default Receiptgen;
