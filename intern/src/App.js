import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Receiptgen from "./pages/rgen/Receiptgen";
import Home from "./pages/home/index";
const App = () => {
  return (
   <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add-expense" element={<AddExpense />} />
        <Route path="/receipt" element={<Receiptgen />} />
      </Routes>
      <Footer />
      </>
  );
};

export default App;
