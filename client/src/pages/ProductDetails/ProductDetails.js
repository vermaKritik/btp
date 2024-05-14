import React, { useState,useEffect } from "react";
import "./ProductDetails.css";
import CustomizedTables from "../../components/CustomizedTables/CustomizedTables";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import AddressBarr from "../../components/Addressbarr/Addressbarr";
import medicinesData from "../../data/medicinesData.json";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";

import abi from "../../data/abi.json";

const contractAddress = process.env.REACT_APP_CONTRACT_HASH;

function ProductDetails() {
  const { hash } = useParams();
  const [ndata, setData] = useState([]);
  const data = medicinesData[hash[0] * 1];

  async function runContractFunction() {
    try {
      // Connect to MetaMask wallet
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      // Get the connected wallet's signer
      const signer = provider.getSigner();
      console.log("signer", signer);

      // Instantiate the contract
      const contract = new ethers.Contract(contractAddress, abi, signer);

      // Call the contract function
      const tx = await contract.get();

      const transaction = [];
      tx.map(
        (el, index) =>
          index > 1 &&
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

  const transaction = ndata[hash[0] * 1];

  useEffect(() => {
    runContractFunction()

  }, [])
  

  return (
    <div className="productDetails__wrapper">
      <div className="productDetails">
        <div className="productDetails__left">
          <p className="productDetails__leftHeadingBig">Shipment Details</p>
          <p className="productDetails__leftHeading">
            <span>{data.hash}</span>
            <span
              style={
                data.status === "Pending" ? { background: "#b9a50029" } : {}
              }
            >
              {transaction?.status}
            </span>
          </p>

          <div className="productDetails__leftContent">
            <div className="productDetails__leftContentL">
              <div className="productDetails__leftContentLAddressBox">
                <p className="productDetails__leftContentLAddressH">
                  Manufacturer
                </p>
                <p className="productDetails__leftContentLAddressD">
                  1234 Border Rd
                </p>
                <p className="productDetails__leftContentLAddressD">
                  Long Beach, CA 90563
                </p>
                <p className="productDetails__leftContentLAddressD">
                  receiver@shipment.com
                </p>
              </div>
              <div
                className="productDetails__leftContentLAddressBox"
                style={{ marginTop: "20px" }}
              >
                <p className="productDetails__leftContentLAddressH">ship to</p>
                <p className="productDetails__leftContentLAddressD">
                  1234 Border Rd
                </p>
                <p className="productDetails__leftContentLAddressD">
                  Long Beach, CA 90563
                </p>
                <p className="productDetails__leftContentLAddressD">
                  receiver@shipment.com
                </p>
              </div>
            </div>
            <div className="productDetails__leftContentR">
              <div className="productDetails__leftContentRDetailsBox">
                <p>Packaging date</p>
                <p>{data.history[0].timestamp}</p>
              </div>

              <div className="productDetails__leftContentRDetailsBox">
                <p>Sale Order</p>
                <p>SO-124564</p>
              </div>

              <div className="productDetails__leftContentRDetailsBox">
                <p>Total Quantity</p>
                <p>{data.units}</p>
              </div>
            </div>
          </div>
          <div className="productDetails__leftTable">
            <CustomizedTables
              data={[medicinesData[hash[0] * 1]]}
              action={false}
            />
          </div>
        </div>
        <div className="productDetails__right">
          <div className="productDetails__details">
            <p className="productDetails__leftHeadingBig">Tracking</p>
            <div className="productDetails__rightDetails">
              <div className="productDetails__rightDetailsInner">
                <AirportShuttleIcon
                  style={{ fontSize: "70px", color: "#afbacf" }}
                />
                <div className="productDetails__rightDetailsData">
                  <p>SHP-00000007</p>
                  {data.status === "Received" && (
                    <p>Shipped on {data.history[0].timestamp.split(",")[2]}</p>
                  )}
                </div>
              </div>
              <div className="productDetails__rightDetailsContent">
                <div className="productDetails__rightDetailsContentL">
                  <div className="productDetails__rightDetailsContentLBox">
                    <p>Carrier</p>
                    <p>DHL</p>
                  </div>
                  <div className="productDetails__rightDetailsContentLBox">
                    <p>Shipping Charge</p>
                    <p>$200</p>
                  </div>
                  {data.humidity && (
                    <div className="productDetails__rightDetailsContentLBox">
                      <p>Humidity</p>
                      <p>10%</p>
                    </div>
                  )}
                </div>
                <div className="productDetails__rightDetailsContentR">
                  <div className="productDetails__rightDetailsContentLBox">
                    <p>Tracking ID</p>
                    <p>12341234</p>
                  </div>
                  <div className="productDetails__rightDetailsContentLBox">
                    <p>Status</p>
                    <p>{data.status}</p>
                  </div>
                  {data.temperature && (
                    <div className="productDetails__rightDetailsContentLBox">
                      <p>Temperature</p>
                      <p>{data.temperature}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="productDetails__history">
            <p className="productDetails__leftHeadingBig">Shipment Timeline</p>
            <div className="productDetails__historyContainer">
              {data.history.map((el) => (
                <AddressBarr timestamp={el.timestamp} message={el.message} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
