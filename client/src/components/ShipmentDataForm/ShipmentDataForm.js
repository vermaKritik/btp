import React from "react";
import "./ShipmentDataForm.css";
import { TextField } from "@mui/material";

function ShipmentDataForm() {
  return (
    <div className="shipmentDataForm">
      <div className="medicineDataForm__sec medicineDataForm__sec1">
        <h3>Shipment Details</h3>
        {/* <div className="shipmentDataForm_id">shipment id : SH123456</div>
        <div className="shipmentDataForm_id">tracking id : TR789012</div> */}
        <div className="medicineDataForm__addItemBoxRow">
          <div>
            <TextField
              fullWidth
              value="SH123456"
              defaultValue="SH123456"
              id="shipment_id"
              label="Shipment Id"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              fullWidth
              value="TR789012"
              id="tracking_id"
              defaultValue="TR789012"
              label="Tracking Id"
              variant="outlined"
            />
          </div>
        </div>
        <div className="medicineDataForm__addItemBoxRow">
          <div>
            <TextField
              fullWidth
              id="manufacturing_date"
              label="Manufacturing Date"
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              fullWidth
              id="expiry_date"
              label="Expiry Date"
              variant="outlined"
            />
          </div>
        </div>
        <p className="ShipmentDataForm__destination"> destination</p>
        <div className="shipmentDataForm__row">
          <div>
            <TextField
              fullWidth
              id="manufacturing_date"
              label="Manufacturing Date"
              variant="outlined"
            />
          </div>
          <div></div>
        </div>
        <div className="shipmentDataForm__row">
          <div>
            <TextField
              fullWidth
              id="manufacturing_date"
              label="Manufacturing Date"
              variant="outlined"
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ShipmentDataForm;
