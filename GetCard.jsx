import {
    Card,
    CardActions,
    CardContent,
    Typography,
    Button,
    Backdrop,
    CircularProgress,
    } from "@mui/material";
    import React, { useState } from "react";
    import { SCM, abi_SCM } from "../new_deployments";
    import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
    function GetCard({ pollId, state }) {
    const [Clicked, setClicked] = useState(false);
    const { address } = useAccount();
    const { config } = usePrepareContractWrite({
    address: SCM,
    abi: abi_SCM,
    functionName: "startPoll",
    args: [pollId],
    overrides:{from:address}
    });
    const { writeAsync, isLoading, isSuccess } = useContractWrite(config);
    if(isSuccess){
    return(
    <Typography variant="h5" justifyContent="center" display="flex" mt="15%">
    Poll started!
    </Typography>
    )
    }
    if (isLoading) {
    return (
    <Backdrop
    open={true}
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
    <CircularProgress color="inherit"></CircularProgress>
    </Backdrop>
    );
    }
    return (
    <div>
    <Card>
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    {pollId}
    </Typography>
    </CardContent>
    <CardActions>
    {state == 2 ? (
    Clicked ? (
    <Button size="small" onClick={writeAsync}>
    Confirm
    </Button>
    ) : (
    <Button
    size="small"
    onClick={() => {
    setClicked(true);
    }}
    >
    Start
    </Button>
    )
    ) : (
    <></>
    )}
    </CardActions>
    </Card>
    </div>
    );
    }
    export default GetCard;