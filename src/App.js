import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import { Topbar } from "./scenes/global/Topbar";

import { Sidebar } from "./scenes/global/Sidebar";
import { Dashboard } from "./scenes/Dashboard";
import { Team } from "./scenes/Team";
import { Invoices } from "./scenes/Invoices";
import { Contacts } from "./scenes/Contacts";
import { Bar } from "./scenes/Bar";
import { Form } from "./scenes/Form";
import { Line } from "./scenes/Line";
import { Pie } from "./scenes/Pie";
import { Faq } from "./scenes/Faq";
import { Geography } from "./scenes/Geography";
import { Calendar } from "./scenes/Calendar";

export function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
