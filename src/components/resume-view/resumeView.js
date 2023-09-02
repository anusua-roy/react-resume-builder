import React, { useState } from "react";
import { Box, Grid, Fab } from "@mui/material";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import ZoomOutOutlinedIcon from "@mui/icons-material/ZoomOutOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ResumeEditor from "../resume-editor/resumeEditor";

const ResumeView = () => {
  const [size, setSize] = useState(80);
  return (
    <Grid item xs={7} className="resume-view-container">
      <Box
        bgcolor={"white"}
        width={`${0.7055 * size}vh`}
        height={`${size}vh`}
        m={"10vh"}
      >
        <ResumeEditor />
      </Box>
      <Box
        className="resume-view-fab-button-bar"
        sx={{ "& > :not(style)": { m: 1 } }}
      >
        <Fab
          className="btn-color"
          disabled={size === 200}
          onClick={() => {
            setSize(size + 10);
          }}
        >
          <ZoomInOutlinedIcon />
        </Fab>
        <Fab
          className="btn-color"
          disabled={size === 10}
          onClick={() => {
            setSize(size - 10);
          }}
        >
          <ZoomOutOutlinedIcon />
        </Fab>
        <Fab className="btn-color" disabled>
          <FileDownloadOutlinedIcon />
        </Fab>
      </Box>
    </Grid>
  );
};

export default ResumeView;
