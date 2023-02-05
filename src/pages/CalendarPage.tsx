import { useAppointments, useCompanySchedule, useStaff } from "api";
import { Calendar } from "components";
import { openModal } from "components/modals/ModalHandlers";
import { CalendarClickEvent } from "types/calendar";

const CalendarPage: React.FC = () => {
  const appointmentsQuery = useAppointments();
  const companyScheduleQuery = useCompanySchedule();
  const staffQuery = useStaff();

  const onClick = (e: CalendarClickEvent) => {
    const isEmpty = !Object.hasOwn(e.data, "id");
    openModal("CreateAppointmentModal", { data: e.data });
    console.log("isEmpty", isEmpty);
    console.log(e);
  };

  return (
    <Calendar
      staff={staffQuery.data}
      appointments={appointmentsQuery.data}
      onClick={onClick}
      {...companyScheduleQuery.data}
    />
  );
};

export default CalendarPage;
