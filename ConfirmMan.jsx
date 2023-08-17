import React from "react";
import {
Backdrop,
CircularProgress,
Typography,
Button,
Box,
} from "@mui/material";
import { Bote, abi_Bote } from "../new_deployments";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
function ConfirmMan({ loc, org, name }) {
console.log(loc);
console.log(org);
console.log(name);
const { config } = usePrepareContractWrite({
address: Bote,
abi: abi_Bote,
functionName: "addMan",
args: [loc, org, name],
});
const { writeAsync, isLoading, isSuccess } = useContractWrite(config);
if (isSuccess) {
return (
<Typography variant="h5" justifyContent="center" display="flex" mt="15%" >
Manefacturer successfully added
</Typography>
);
}
if (isLoading) {
return (
<Backdrop
open={true}
sx={{ color: "#3d6f79", zIndex: (theme) => theme.zIndex.drawer + 1 }}
>
<CircularProgress color="inherit"></CircularProgress>
</Backdrop>
);
}
return (
<>
<Typography display="flex" justifyContent="center" mt="20%">
<Button onClick={writeAsync}>Confirm</Button>
</Typography>
</>
);
}
export default ConfirmMan;
