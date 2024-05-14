import * as React from "react";
import "./CreatTransection.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MedicineDataForm from "../../components/MedicineDataForm/MedicineDataForm";
import ShipmentDataForm from "../../components/ShipmentDataForm/ShipmentDataForm";
import { ethers } from "ethers";

import abi from "../../data/abi.json";
import { CircularProgress } from "@mui/material";
const contractAddress = process.env.REACT_APP_CONTRACT_HASH;

const fff = {
  hash: "0x03F55E6cdFCeE8FC39A36c2e938B1A746B4SDV68",
  shipment_id: "SH61828",
  tracking_id: "TR745874",
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

const steps = [
  "Add Medisine Data",
  "Add Shipment Details",
  "Pending Transection",
  "Transection Completed",
];

function CreatTransection() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [debug, setDebug] = React.useState(true);
  const [loading, SetLoading] = React.useState(0);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  async function runContractFunction() {
    try {
      SetLoading(1);
      setActiveStep(2);
      // Connect to MetaMask wallet
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      // Get the connected wallet's signer
      const signer = provider.getSigner();
      console.log("signer", signer);

      // Instantiate the contract
      const contract = new ethers.Contract(contractAddress, abi, signer);
      // Call the contract function
      const tx = await contract.set(JSON.stringify(fff));

      if (tx && tx.hash) {
        // Wait for the transaction to be mined
        const receipt = await provider.waitForTransaction(tx.hash);
        console.log("receipt", receipt);

        SetLoading(2);
        setActiveStep(3);
        // setTransactionHash(tx.hash);
      } else {
        console.error("Transaction hash is invalid:", tx);
      }

      // setTransactionHash(tx.hash);
    } catch (error) {
      console.error("Error running contract function:", error);
    }
  }

  // useEffect(() => {
  //   runContractFunction();
  //   // console.log("contractAddress",contractAddress);
  // }, []);

  return (
    <div className="creatTransection">
      <div className="creatTransection__main">
        <Box sx={{ width: "100%", height: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <div className="creatTransection__step">
              <div className="creatTransection__stepData">
                {activeStep === 0 && (
                  <MedicineDataForm setDebug={setDebug} debug={debug} />
                )}
                {activeStep === 1 && (
                  <ShipmentDataForm setDebug={setDebug} debug={debug} />
                )}
                {activeStep === 2 && <div className="panding">
                  <div className="panding_container">
                  <CircularProgress size={100} />
                  <h3 style={{marginTop:"20px"}}>Transection is Pending....</h3>
                  </div>
                  </div>}
                {activeStep === 3 && (
                  <div className="sucess">
                    <div className="sucess_container">
                      <img
                        src="/pngtree-check-mark-icon-design-template-vector-isolated-png-image_711429.jpg"
                        alt=""
                      />
                      <h3>Transaction is Complited </h3>
                    </div>
                  </div>
                )}
              </div>
              {activeStep < 2 && (
                <div className="creatTransection__stepBtn">
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />

                    {activeStep === steps.length - 3 ? (
                      <Button onClick={runContractFunction}>Save</Button>
                    ) : (
                      <Button onClick={handleNext}>Next</Button>
                    )}
                  </Box>
                </div>
              )}
            </div>
          )}
        </Box>
      </div>
    </div>
  );
}

export default CreatTransection;
