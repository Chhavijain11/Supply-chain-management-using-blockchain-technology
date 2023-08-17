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
import ConfirmMan from "./ConfirmMan";
function AddMan() {
const [loc, setloc] = useState();
const [org, setorg] = useState();
const [name, setname] = useState();
const [isClicked, setisClicked] = useState(false);
// function handleMan(e) {
// let Man = e.target.value.split(" ");
// console.log(Man);
// setloc(Man[0]);
// setorg(man[1]);
// setname(man[2]);
// }
if (isClicked) {
return <ConfirmMan loc={loc} org={org} name={name}></ConfirmMan>;
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
export default AddMan;