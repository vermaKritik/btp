import React, { useState } from "react";
import "./MedicineDataForm.css";
import { Button, TextField } from "@mui/material";
import "./MedicineDataForm.css";
import AddItemBox from "./AddItemBox";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../../store/dataSlice";

function MedicineDataForm({ setDebug, debug }) {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.data.items);

  // const [items, setItems] = useState([
  //   {
  //     hex:"wefvuyewrjcs",
  //     medicine_name: "",
  //     dosage: "",
  //     quantity: "",
  //     status: "",
  //     manufacturing_date: "",
  //     expiry_date: "",
  //   },
  // ]);

  const addItem = () => {
    dispatch(
      setItem({
        hex: "wkejqbfbuih",
        medicine_name: "",
        dosage: "",
        quantity: "",
        status: "",
        manufacturing_date: "",
        expiry_date: "",
      })
    );
    // const temp = items;
    // temp.push({
    //   hex:"wkejqbfbuih",
    //   medicine_name: "",
    //   dosage: "",
    //   quantity: "",
    //   status: "",
    //   manufacturing_date: "",
    //   expiry_date: "",
    // });
    // // setItems(temp);

    // setDebug(!debug)

    // console.log(items);
  };

  return (
    <div className="medicineDataForm">
      <div className="medicineDataForm__sec medicineDataForm__sec1">
        <h3>manufacturer</h3>
        <div className="medicineDataForm__secrow">
          <p>name</p>
          <p>Manufacturer Name</p>
        </div>
        <div className="medicineDataForm__secrow">
          <p>address</p>
          <p>Manufacturer Name</p>
        </div>
        <div className="medicineDataForm__secrow">
          <p>email</p>
          <p>manufacturer@example.com</p>
        </div>
      </div>
      <div className="medicineDataForm__sec medicineDataForm__sec2">
        <h3>Items</h3>
        <div className="medicineDataForm__addItemContainer">
          {items?.map((el,index) => (
            <AddItemBox key={el.hex} index={index} hex={el.hex} />
          ))}
        </div>
        <div className="medicineDataForm__button">
          <Button onClick={addItem} fullWidth variant="outlined">
            + ADD Items
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MedicineDataForm;
