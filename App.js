import "./App.css";
import { Route, Routes, Link, Router } from "react-router-dom";
import Home from "./components/Home";
import ResponsiveAppBar from "./components/Navbar";
import AddMan from "./components/AddMan";
import AddDis from "./components/AddDis";
import AddRet from "./components/AddRet";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider,darkTheme } from "@rainbowme/rainbowkit";
import {
chain,
configureChains,
createClient,
useSigner,
WagmiConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const darkTheme_MUI = createTheme({
palette: {
mode: 'dark',
},
});
const { chains, provider, webSocketProvider } = configureChains(
[chain.polygonMumbai],
[
alchemyProvider({ apiKey: "9Wc5W1c7UekbGVThR6XdflYMiWEKQ9p5" }),
publicProvider(),
]
);
const { connectors } = getDefaultWallets({
appName: "RainbowKit demo",
chains,
});
const wagmiClient = createClient({
autoConnect: true,
connectors,
provider,
webSocketProvider,
});
function App() {
return (
<>
<ThemeProvider theme={darkTheme_MUI}>
<CssBaseline />
<WagmiConfig client={wagmiClient}>
<RainbowKitProvider chains={chains} theme={darkTheme()}>
<ResponsiveAppBar></ResponsiveAppBar>
</RainbowKitProvider>
</WagmiConfig>
<WagmiConfig client={wagmiClient}>
<Routes>
<Route path="/" element={<Home></Home>}></Route>
{/* <Route path="/AddProd" element={<Addprod></Addprod>}></Route> */}
<Route path="/AddDis" element={<AddDis></AddDis>}></Route>
<Route path="/AddMan" element={<AddMan></AddMan>}></Route>
<Route path="/AddRet" element={<AddRet></AddRet>}></Route>
{/* <Route path="/AddProdDis" 
element={<AddProdDis></AddProdDis>}></Route>
<Route path="/AddProdMan" element={<AddProdMan></AddProdMan>}></Route>
<Route path="/AddProdRet" element={<AddProdRet></AddProdRet>}></Route>
<Route path="/SellProd" element={<SellProd></SellProd>}></Route>
<Route path="/Verify" element={<Verify></Verify>}></Route>
<Route path="/ViewRoute" element={<ViewRoute></ViewRoute>}></Route> */}
</Routes>
</WagmiConfig>
</ThemeProvider>
</>
);
}
export default App;