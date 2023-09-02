import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/appRoutes";
import { INITIAL_RESUME_DATA } from "./constants/initialData";

export const AppContext = createContext();

const App = () => {
  const [appData, setAppData] = useState(INITIAL_RESUME_DATA);

  return (
    <React.Fragment>
      <BrowserRouter>
        <AppContext.Provider value={{ appData, setAppData }}>
          <AppRoutes />
        </AppContext.Provider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
