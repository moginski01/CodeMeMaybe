import React from 'react';
import { useState } from "react";
import "./App.css";
import PayPal from "./PayPal";
// import { useEffect, useState } from "react"

const Payment = () => {
    const [checkout, setCheckOut] = useState(false);
    return (
        <div className="App">
          {checkout ? (
            <PayPal />
          ) : (
            <button
              onClick={() => {
                setCheckOut(true);
              }}
            >
              Checkout
            </button>
          )}
        </div>
      );
}

export default Payment