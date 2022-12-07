import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import CustomerList from "./CustomerList";
import TrainingList from "./TrainingList";

export default function TabApp() {
  const [value, setValue] = useState("home");
  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="home" label="Home" />
        <Tab value="customerlist" label="Customers" />
        <Tab value="traininglist" label="Trainings" />
      </Tabs>
      {value === "home" && (
        <div>
          <h1>Welcome to the personal training page</h1>
        </div>
      )}{" "}
      {value === "customerlist" && (
        <div>
          <CustomerList />
        </div>
      )}{" "}
      {value === "traininglist" && (
        <div>
          <TrainingList />
        </div>
      )}
    </div>
  );
}
