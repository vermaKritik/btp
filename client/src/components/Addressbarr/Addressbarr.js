import React from "react";
import "./AddressBarr.css";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function AddressBarr({timestamp,message}) {
  return (
    <div className="productDetails__historyLine">
    <span>
        <AccessTimeIcon/>
    </span>
    <div className="productDetails__historyLineWrapper">
      <p className="productDetails__historyLineDate">
        {timestamp}
      </p>
      <p className="productDetails__historyLineAddress">
        {message}
      </p>
    </div>
    </div>
  );
}

export default AddressBarr;
