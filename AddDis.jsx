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
import ConfirmDis from "./ConfirmDis";
function AddDis() {
const [loc, setloc] = useState();
const [org, setorg] = useState();
const [name, setname] = useState();
const [isClicked, setisClicked] = useState(false);
// function handleDis(e) {
// let Dis = e.target.value.split(" ");
// console.log(Dis);
// setloc(Dis[0]);
// setorg(Dis[1]);
// setname(Dis[2]);
// }
if (isClicked) {
return <ConfirmDis loc={loc} org={org} name={name}></ConfirmDis>;
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
export default AddDis;