import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import OrderedList from "../shared/ordered-list/OrderedList";

const DataForm = () => {
  const { appData, setAppData } = useContext(AppContext);

  const [currSkill, setCurrSkill] = useState("");

  const handleTextChange = (value, key) => {
    if (key === "currSkill") setCurrSkill(value);
    else if (key === "skills") {
      setAppData({ ...appData, [key]: [...appData.skills, value] });
      setCurrSkill("");
    } else setAppData({ ...appData, [key]: value });
  };

  const updateSkillsList = (dataList) => {
    setAppData({ ...appData, skills: [...dataList] });
  };

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {"PERSONAL DETAILS"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="data-form-text-field"
          label="Full Name"
          value={appData.name}
          onChange={(e) => handleTextChange(e.target.value, "name")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="data-form-text-field"
          label="Occupation"
          value={appData.occupation}
          onChange={(e) => handleTextChange(e.target.value, "occupation")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="data-form-text-field"
          label="About Me"
          multiline
          rows={4}
          value={appData.about}
          onChange={(e) => handleTextChange(e.target.value, "about")}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          className="data-form-text-field"
          label="Email"
          value={appData.email}
          onChange={(e) => handleTextChange(e.target.value, "email")}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          className="data-form-text-field"
          label="Contact"
          value={appData.contact}
          onChange={(e) => handleTextChange(e.target.value, "contact")}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="data-form-text-field"
          label="Address"
          multiline
          rows={2}
          value={appData.address}
          onChange={(e) => handleTextChange(e.target.value, "address")}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {"EDUCATION DETAILS"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {"WORK EXPERIENCE"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {"SKILLS"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <OrderedList
          dataList={appData.skills}
          updateDataList={updateSkillsList}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className="data-form-text-field"
          label="New Skill"
          value={currSkill}
          onChange={(e) => handleTextChange(e.target.value, "currSkill")}
          onKeyUp={(e) =>
            e.key === "Enter" && handleTextChange(currSkill, "skills")
          }
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {"ACHIEVEMENTS"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {"LANGUAGES"}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          {"INTERESTS"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DataForm;
