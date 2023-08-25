import React from "react";
import { Grid } from "@mui/material";

const ALL_RESUMES = [];

const ResumeList = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {ALL_RESUMES.map((resume) => {
          return (
            <Grid item xs={3}>
              {resume.component}
              {resume.name}
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ResumeList;
