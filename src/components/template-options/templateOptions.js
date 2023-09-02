import React, { useState } from "react";
import { Box, Grid, Tabs, Tab } from "@mui/material";
import DataForm from "../data-form-container/dataForm";

const TemplateOptions = () => {
  const [value, setValue] = useState("data");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item xs={5} className="template-options-container">
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab value="data" label="data" />
          <Tab value="styling" label="styling" disabled />
          <Tab value="templates" label="templates" disabled />
        </Tabs>
      </Box>
      {value === "data" && <DataForm />}
      {value === "styling" && <h1>{"Styling Options"}</h1>}
      {value === "templates" && <h1>{"Template Options"}</h1>}
    </Grid>
  );
};

export default TemplateOptions;
