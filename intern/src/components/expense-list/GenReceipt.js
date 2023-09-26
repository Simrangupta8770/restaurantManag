import React,{useState,useEffect} from 'react'
import PDFGenerator from './PDFGenerator';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import {Routes, Route, useNavigate,useLocation} from "react-router-dom";
const GenReceipt = () => {
  const location = useLocation("");
  const item = location.state;
 
   //const item = []; 
   const [tip, setTip] = useState("");
    const [amt, setAmt] = useState(item.tot);
    
    const total = item.tot + tip;
  let bill = item;
  const handleTip = async(e) => {
      console.log(parseInt(e.target.value));
      
    setTip(parseInt(e.target.value) || 0);
    
     
    // handleAmt();
      
  }
  useEffect(() => {
    
      handleAmt();
   
  }, [tip]);
  const handleAmt = () => {
    console.log(tip); 
    setAmt((parseInt(tip) || 0) + item.tot);
}
  return (
      <>{item ?
          <div className="add-form">
          <label>Add Tip</label>
          <input type="text" value={tip} onChange={handleTip} />
          Total Amt : {amt}
          
        <button>
          <PDFDownloadLink document={<PDFGenerator items={bill} total={amt} />} fileName="bill.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
              </button>
      </div> : 
      <p>
        Loading .. </p>
        }
     
      </>
  )
}

export default GenReceipt;