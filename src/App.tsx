import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Drawer } from "components";
import { CalendarPage, UsersPage } from "pages";

import "./App.css";

const App: React.FC = () => (
  <BrowserRouter>
    <Drawer>
      <Routes>
        <Route index element={<CalendarPage />} />
        <Route path="book" element={<CalendarPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="services" element={<CalendarPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="customers" element={<UsersPage />} />
        <Route path="settings" element={<CalendarPage />} />
      </Routes>
    </Drawer>
  </BrowserRouter>
);

export default App;
