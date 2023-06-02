import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ModalProvider } from "components/modals/modal-handlers";
import { CalendarPage } from "pages/calendar/calendar-page";
import { CustomersPage } from "pages/customers-page";
import { StaffPage } from "pages/staff-page";
import { ServicesPage } from "pages/service-page";

import "./app.css";
import { QueryWrapper } from "components/query-wrapper";
import { Drawer } from "components/drawer";
import { Sidebar } from "components/sidebar";

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
      <Sidebar.Provider />
    </BrowserRouter>
    <ModalProvider />
  </QueryWrapper>
);

export default App;
