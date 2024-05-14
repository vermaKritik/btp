import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      hex: "wefvuyewrjcs",
      medicine_name: "",
      dosage: "",
      quantity: "",
      status: "",
      manufacturing_date: "",
      expiry_date: "",
    },
  ],

  ShipmentData: {
    shipping_charge: "",
    packaging_total_quantity: "",
    status: "",
    temperature: "null",
    shipment_id: "",
    tracking_id: "",
    ship_date: "",
    delivery_date: "",
    destination: {
      address: "",
      email: "",
    },
  },

  transaction: "",
};

export const activateSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setItem: (state, action) => {
      const obj = action.payload;
      state.items.push(obj);
    },

    updateItem: (state, action) => {
      const { data, index } = action.payload;
      state.items[index * 1] = data;
    },
    setShipmentData: (state, action) => {
      const { data } = action.payload;
      state.ShipmentData = data;
    },
    setTx: (state, action) => {
      const { data } = action.payload;
      console.log("transaction",data);
      state.transaction = data;
    },
  },
});

export const { setItem, updateItem, setTx } = activateSlice.actions;

export default activateSlice.reducer;
