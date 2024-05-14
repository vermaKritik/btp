import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import "chart.js/auto";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import InfoIcon from "@mui/icons-material/Info";
import { IconButton } from "@mui/material";
import HeaderCard from "../../components/HeaderCard/HeaderCard";
import Chart from "react-chartjs-2";
import RegisterDisturbance from "../../components/RegisterDisturbance/RegisterDisturbance";
import CustomizedTables from "../../components/CustomizedTables/CustomizedTables";
import line from "../../data/line.json";
import medicinesData from "../../data/medicinesData.json";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AssignmentIcon from "@mui/icons-material/Assignment";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import AirportShuttle from "@mui/icons-material/AirportShuttle";

import { ethers } from "ethers";

import abi from "../../data/abi.json";
import { useDispatch } from "react-redux";
import { setTx } from "../../store/dataSlice";

const styleData = {
  // color:"rgba(0, 128, 0, 0.6)",
  fontSize: "35px",
};

const contractAddress = process.env.REACT_APP_CONTRACT_HASH;

const data = {
  shipment_id: "SH123456",
  tracking_id: "TR789012",
  ship_date: "2024-03-04",
  delivery_date: "2024-03-10",
  destination: {
    address: "ABC Pharmacy, XYZ Street, City",
    email: "abcpharmacy@example.com",
  },
  manufacturer: {
    name: "Manufacturer Name",
    address: "Manufacturer Address, City",
    email: "manufacturer@example.com",
  },
  packaging_total_quantity: 350,
  shipping_charge: "20 USD",
  status: "In transit",
  temperature: "Controlled",
  items: [
    {
      medicine_name: "Medicine A",
      dosage: "10mg",
      quantity: 100,
      hash: "hash_value_1",
      status: "Available",
      manufacturing_date: "2023-01-01",
      expiry_date: "2025-01-01",
    },
    {
      medicine_name: "Medicine B",
      dosage: "20mg",
      quantity: 50,
      hash: "hash_value_2",
      status: "Available",
      manufacturing_date: "2023-02-01",
      expiry_date: "2025-02-01",
    },
    {
      medicine_name: "Medicine C",
      dosage: "5mg",
      quantity: 200,
      hash: "hash_value_3",
      status: "Available",
      manufacturing_date: "2023-03-01",
      expiry_date: "2025-03-01",
    },
  ],
};

function Dashboard({ globalProvider }) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  async function runContractFunction() {
    try {
      // Connect to MetaMask wallet
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      // Get the connected wallet's signer
      const signer = provider.getSigner();
      console.log("signer", signer);

      // Instantiate the contract
      const contract = new ethers.Contract("0x3f8136480aceEF81235eD5E8a6193e8E71786A97", abi, signer);

      // Call the contract function
      const tx = await contract.get();

      const transaction = [];
      tx.map(
        (el, index) =>
          // index > 1 &&
          transaction.push({
            ...JSON.parse(el),
            history: [
              {
                timestamp: "5:34 PM, Monday, 03 June, 2019",
                message: "Delivered - Package received by Jon Medical",
              },
              {
                timestamp: "8:15 AM, Tuesday, 11 August, 2020",
                message:
                  "Delivered - Successfully delivered to Jon Medical's reception",
              },
              {
                timestamp: "2:45 PM, Thursday, 22 October, 2021",
                message: "Delivered - Left at Jon Medical's doorstep",
              },
              {
                timestamp: "10:22 AM, Sunday, 07 March, 2022",
                message: "Delivered - Package handed over to Jon Medical staff",
              },
              {
                timestamp: "6:55 PM, Wednesday, 14 May, 2023",
                message: "Delivered - Delivered and signed by Jon Medical",
              },
              {
                timestamp: "3:10 AM, Saturday, 29 July, 2023",
                message: "Delivered - Left in Jon Medical's mailroom",
              },
            ],
          })
      );
      transaction.reverse()

      console.log(transaction);
      setData(transaction);
      // dispatch(setTx(data))

      if (tx && tx.hash) {
        // Wait for the transaction to be mined
        const receipt = await provider.waitForTransaction(tx.hash);
        console.log("receipt", receipt);
        // setTransactionHash(tx.hash);
      } else {
        console.error("Transaction hash is invalid:", tx);
      }

      // setTransactionHash(tx.hash);
    } catch (error) {
      console.error("Error running contract function:", error);
    }
  }

  useEffect(() => {
    runContractFunction();
    // console.log("contractAddress",contractAddress);
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__headingWrapper">
        <p className="dashboard__heading" onClick={runContractFunction}>
          <OtherHousesIcon style={{ color: "#8b96aa" }} />
          <span>Dashboard</span>
        </p>
        <IconButton>
          <InfoIcon style={{ color: "#8b96aa" }} />
        </IconButton>
      </div>
      <div className="dashboard__header">
        <HeaderCard
          data={85}
          icon={<AirportShuttle style={styleData} />}
          title={"Ready Shipments"}
        />
        <HeaderCard
          data={10}
          icon={<StarBorderIcon style={styleData} />}
          title={"Active Orders"}
        />
        <HeaderCard
          data={16}
          icon={<AccessTimeIcon style={styleData} />}
          title={"Required Delivery"}
        />
        <HeaderCard
          data={7}
          icon={<AssignmentIcon style={styleData} />}
          title={"Active Smart Contracts"}
        />
      </div>

      <div className="dashboard__secOne">
        <div className="dashboard__secOneVertical">
          <div className="dashboard__secOneInvoice">
            <div className="dashboard__secOneInvoiceContent">
              <p>Active packages</p>
              <div className="dashboard__secOneInvoiceContentBox">
                <div className="dashboard__secOneInvoiceContentSubBox">
                  <p>Active Contracts</p>
                  <p>$73</p>
                </div>
                <div className="dashboard__secOneInvoiceContentSubBox">
                  <p>Active Units</p>
                  <p>98 Ut</p>
                </div>
              </div>
            </div>

            <div className="dashboard__secOneInvoiceGraph">
              <Chart
                type="doughnut"
                datasetIdKey="id"
                data={{
                  labels: ["Padding", "Completed", "Shipping"],
                  datasets: [
                    {
                      // id: 1,
                      label: "Today",
                      data: [5, 16, 2],
                    },
                    {
                      // id: 2,
                      label: "Yesterday",
                      data: [0, 22, 1],
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div className="dashboard__secOneRegisterDisturbance">
            <RegisterDisturbance />
          </div>
        </div>
        <div className="dashboard__secOneGraph">
          <Chart
            type="line"
            datasetIdKey="id"
            data={{
              labels: line.label,
              datasets: [
                {
                  id: 1,
                  label: "Shipment Received",
                  data: line.data1,
                },
                {
                  id: 2,
                  label: "Shipment sent",
                  data: line.data2,
                },
              ],
            }}
          />
        </div>
      </div>

      <div className="dashboard__secTow">
        <CustomizedTables action data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
