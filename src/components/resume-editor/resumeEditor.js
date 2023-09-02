import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Box, Grid, Typography } from "@mui/material";

const ResumeEditor = () => {
  const { appData } = useContext(AppContext);
  return (
    <Grid container height={"100%"}>
      <Grid item xs={5} bgcolor={"#212026"} height={"100%"}>
        <Box className="resume-editor-img-container"></Box>
        <Box py={2} px={1} textAlign={"left"}></Box>
      </Grid>
      <Grid item xs={7} py={1}>
        <Box bgcolor={"#fecb00"} py={2} px={1} textAlign={"left"}>
          <Typography variant="h6">
            {appData.name.toUpperCase()}
          </Typography>
          <Typography variant="button">
            {appData.occupation.toUpperCase()}
          </Typography>
        </Box>
        <Box py={1} px={1} textAlign={"left"}>
          <Typography className="resume-editor-section" variant="body2">
            {"ABOUT ME"}
          </Typography>
          <Typography textAlign={"justify"} fontSize={"9px"}>
            {appData.about}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ResumeEditor;
