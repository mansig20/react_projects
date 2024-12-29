import React from "react";
import "./Home.css";
import { TextField } from "@mui/material";
import { MenuItem } from "@mui/material";
import Categories from "../../Data/Categories";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30, marginBottom: 20, marginTop: 20 }}>
          Quiz Settings
        </span>

        <div className="settings_select">
          <TextField
            style={{ marginBottom: 30 }}
            label="Enter Your Name"
            variant="outlined"
          ></TextField>

          <TextField
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
        </div>
      </div>

      <img src="./qa.png" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
