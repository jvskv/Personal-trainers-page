import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import CustomerList from "./CustomerList";
import TrainingList from "./TrainingList";
import Statistics from "./Statistics";
import CalendarPage from "./CalendarPage";

function TabApp() {
  const [value, setValue] = useState("home");
  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <Tabs value={value} onChange={handleChange}>
        <Tab value="home" label="Home" />
        <Tab value="customerlist" label="Customers" />
        <Tab value="traininglist" label="Trainings" />
        <Tab value="calendar" label="Calendar" />
        <Tab value="statistics" label="Statistics" />
      </Tabs>
      {value === "home" && (
        <div>
          <h1>Welcome to the personal training page</h1>
        </div>
      )}{" "}
      {value === "customerlist" && <CustomerList />}
      {value === "traininglist" && <TrainingList />}
      {value === "calendar" && <CalendarPage />}
      {value === "statistics" && <Statistics />}
    </div>
  );
}

export default TabApp;
