import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./AddItemBox.css";
import { useDispatch } from "react-redux";
import { updateItem } from "../../store/dataSlice";
function AddItemBox({ hex, index }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [ManufacturingDate, setManufacturingDate] = useState("");
  const [ExpiryDate, setExpiryDate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [dosage, setDosage] = useState("");

  const updateData = () => {
    const data = {
      medicine_name: name,
      dosage,
      quantity,
      status,
      manufacturing_date: ManufacturingDate,
      expiry_date: ExpiryDate,
    };
    dispatch(updateItem({ data, index }));
  };

  return (
    <div className="medicineDataForm__addItemBox">
      <p className="addItemBox__hash">{`#${index}`}</p>
      <div className="medicineDataForm__addItemBoxRow">
        <div>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
              updateData();
            }}
            fullWidth
            id="medicine_name"
            label="Name"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={(e) => {
              setDosage(e.target.value);
              updateData();
            }}
            fullWidth
            id="dosage"
            label="Dosage"
            variant="outlined"
          />
        </div>
      </div>
      <div className="medicineDataForm__addItemBoxRow">
        <div>
          <TextField
            onChange={(e) => {
              setManufacturingDate(e.target.value);
              updateData();
            }}
            fullWidth
            id="manufacturing_date"
            label="Manufacturing Date"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={(e) => {
              setExpiryDate(e.target.value);
              updateData();
            }}
            fullWidth
            id="expiry_date"
            label="Expiry Date"
            variant="outlined"
          />
        </div>
      </div>
      <div className="medicineDataForm__addItemBoxRow">
        <div>
          <TextField
            onChange={(e) => {
              setQuantity(e.target.value);
              updateData();
            }}
            fullWidth
            id="quantity"
            label="Quantity"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            onChange={(e) => {
              setStatus(e.target.value);
              updateData();
            }}
            fullWidth
            id="status"
            label="Status"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
}

export default AddItemBox;
