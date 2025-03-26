# PMD (Product Management & Distribution) Blockchain

## Overview
PMD is a blockchain-based supply chain management system implemented in Solidity and integrated with a frontend React application using Web3 libraries. It enables manufacturers, distributors, and retailers to track the journey of a product from creation to sale.

## Features
- **Smart Contract (Solidity)**
  - Tracks the state of a product: `NOTEXIST`, `CREATED`, `ONTHEWAY`, `ATSTORE`, `SOLD`
  - Manufacturers, distributors, and retailers can register and manage products
  - Events emitted for transparency
  - Functions for adding, transferring, and selling products
  - Verification of product authenticity

- **Frontend (React.js + Wagmi + RainbowKit)**
  - User-friendly interface for interacting with the blockchain
  - Dark theme UI using Material-UI
  - Integration with Polygon Mumbai testnet
  - Wallet connection with RainbowKit and Wagmi

## Smart Contract
### Deployment
The smart contract is written in Solidity (version `0.8.x`) and is licensed under GPL-3.0.
To deploy the contract:
1. Install dependencies: `npm install hardhat ethers`.
2. Compile the contract: `npx hardhat compile`.
3. Deploy using a script or Hardhat task.

### Functions
- **addMan**: Register a manufacturer
- **addDis**: Register a distributor
- **addRet**: Register a retailer
- **addProd**: Create a new product
- **addProdDis**: Transfer product to a distributor
- **addProdRet**: Transfer product to a retailer
- **SellProd**: Mark product as sold
- **verify**: Check product authenticity
- **viewstate, viewinfo**: Retrieve product details
- **viewProdRoute**: Track product movement

## Frontend Setup
### Installation
1. Clone the repository: `git clone <repo-url>`
2. Navigate to the frontend directory: `cd frontend`
3. Install dependencies: `npm install`

### Run the Application
```sh
npm start
```

### Technologies Used
- React.js
- Wagmi (Web3 interaction)
- RainbowKit (Wallet connection)
- Material-UI (UI styling)
- Polygon Mumbai Testnet

## Configuration
To connect to the Polygon Mumbai testnet, ensure you have an Alchemy API key. Update the following in the application:
```js
alchemyProvider({ apiKey: "YOUR_ALCHEMY_API_KEY" })
```
