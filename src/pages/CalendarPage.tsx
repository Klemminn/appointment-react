import { useAppointments, useCompanySchedule, useStaff } from "api";
import { Calendar } from "components";

const CalendarPage: React.FC = () => {
  const { data: appointments } = useAppointments();
  const { data: companySchedule } = useCompanySchedule();
  const { data: staff } = useStaff();

  return (
    <Calendar staff={staff} appointments={appointments} {...companySchedule} />
  );
};

export default CalendarPage;
