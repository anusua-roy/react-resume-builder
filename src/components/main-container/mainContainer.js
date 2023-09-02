import React from "react";
import { Grid } from "@mui/material";
import TemplateOptions from "../template-options/templateOptions";
import ResumeView from "../resume-view/resumeView";

const MainContainer = () => {
  return (
    <Grid container>
      <TemplateOptions />
      <ResumeView />
    </Grid>
  );
};

export default MainContainer;
