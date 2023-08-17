import { Table, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import {
Backdrop,
CircularProgress,
Typography,
Button,
Box,
} from "@mui/material";
import ConfirmRet from "./ConfirmRet";
function AddRet() {
const [loc, setloc] = useState();
const [org, setorg] = useState();
const [name, setname] = useState();
const [isClicked, setisClicked] = useState(false);
// function handleRet(e) {
// let Ret = e.target.value.split(" ");
// console.log(Ret);
// setloc(Ret[0]);
// setorg(Ret[1]);
// setname(Ret[2]);
// }
if (isClicked) {
return <ConfirmRet loc={loc} org={org} name={name}></ConfirmRet>;
}
return (
<Box display="flex" justifyContent="center" mt="15%">
<form>
<Table>
<tr>
<td>
<TextField
label="Name"
onChange={(e) => {
setname(e.target.value);
}} ></TextField>
</td>
</tr>
<tr>
<td>
<TextField
label="location"
placeholder="Enter location"
onChange={(e) => {
setloc(e.target.value);
}}
></TextField>
</td>
</tr>
<tr>
<td>
<TextField
label="Organization"
placeholder="Enter organization"
onChange={(e) => {
setorg(e.target.value);
}}
></TextField>
</td>
</tr>
</Table>
<Typography display="flex" justifyContent="center">
<Button
onClick={() => {
setisClicked(true);
}}
>
Create
</Button>
</Typography>
</form>
</Box>
);
}
export default AddRet;
