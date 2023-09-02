import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";

const WelcomePrompt = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2} className="welcome-prompt">
        <Grid item xs={12}>
          <Typography variant="h3" className="welcome-text">
            {"Free resume builder"}
            <br />
            {"for modern job"}
            <br />
            {"seekers"}
          </Typography>
          <Link to="/resume">
            <Button
              className="welcome-btn"
              variant="outlined"
              endIcon={<NavigateNextOutlinedIcon />}
            >
              {"Choose Template"}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default WelcomePrompt;
