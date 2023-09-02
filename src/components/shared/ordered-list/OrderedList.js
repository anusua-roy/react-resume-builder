import React from "react";
import { Grid, List, ListItem, ListItemText, IconButton } from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const OrderedList = ({ dataList, updateDataList }) => {
  if (!dataList.length) return null;

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {dataList.map((value, index) => (
        <ListItem
          key={value}
          disableGutters
          secondaryAction={
            <span>
              {index !== 0 && (
                <IconButton
                  onClick={() => {
                    const tempList = [...dataList];
                    tempList[index] = dataList[index - 1];
                    tempList[index - 1] = dataList[index];
                    updateDataList(tempList);
                  }}
                >
                  <ArrowUpwardOutlinedIcon />
                </IconButton>
              )}

              {index + 1 !== dataList.length && (
                <IconButton
                  onClick={() => {
                    const tempList = [...dataList];
                    tempList[index] = dataList[index + 1];
                    tempList[index + 1] = dataList[index];
                    updateDataList(tempList);
                  }}
                >
                  <ArrowDownwardOutlinedIcon />
                </IconButton>
              )}

              <IconButton
                onClick={() => {
                  const tempList = [...dataList];
                  tempList.splice(index, 1);
                  updateDataList(tempList);
                }}
              >
                <DeleteForeverIcon />
              </IconButton>
            </span>
          }
        >
          <ListItemText primary={value} />
        </ListItem>
      ))}
    </List>
  );
};

export default OrderedList;
