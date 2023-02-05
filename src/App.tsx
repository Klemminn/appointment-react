import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Drawer, QueryWrapper } from "components";
import { ModalProvider } from "components/modals/ModalHandlers";
import { CalendarPage, CustomersPage, StaffPage } from "pages";

import "./App.css";

const App: React.FC = () => (
  <QueryWrapper>
    <BrowserRouter>
      <Drawer>
        <Routes>
          <Route index element={<CalendarPage />} />
          <Route path="book" element={<CalendarPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="services" element={<CalendarPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="staff" element={<StaffPage />} />
          <Route path="settings" element={<CalendarPage />} />
        </Routes>
      </Drawer>
    </BrowserRouter>
    <ModalProvider />
  </QueryWrapper>
);

export default App;
