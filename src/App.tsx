import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ModalProvider } from "components/modals/ModalHandlers";
import { CalendarPage } from "pages/CalendarPage";
import { CustomersPage } from "pages/CustomersPage";
import { StaffPage } from "pages/StaffPage";
import { ServicesPage } from "pages/ServicesPage";

import "./App.css";
import { QueryWrapper } from "components/QueryWrapper";
import { Drawer } from "components/Drawer";

const App: React.FC = () => (
  <QueryWrapper>
    <BrowserRouter>
      <Drawer>
        <Routes>
          <Route index element={<CalendarPage />} />
          <Route path="book" element={<CalendarPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="services" element={<ServicesPage />} />
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
