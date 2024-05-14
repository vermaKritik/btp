require("dotenv").config();

const Web3 = require("web3");
const contractAbi = [
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const contractAddress = "0x3f8136480aceef81235ed5e8a6193e8e71786a97";
const privateKey =
  "69478db84d14a7c5d86fd46a47815984c4f1ad47aa17f44a38b998e5b1881235";

const web3 = new Web3("https://sepolia-testnet.example.com");

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

const contract = new web3.eth.Contract(contractAbi, contractAddress);

async function callSmartContractFunction() {
  // Call your contract function here
  const result = await contract.methods.get().call();

  console.log("Result:", result);
}

callSmartContractFunction().catch(console.error);
