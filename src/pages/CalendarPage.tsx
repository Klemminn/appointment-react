import { useCompanySchedule, useStaff } from "api/company";
import { useAppointments } from "api/appointments";
import { openModal } from "components/modals/ModalHandlers";
import { CalendarClickEvent } from "types/calendar";
import { AvatarTitlePanel } from "components/Panels";
import { Calendar } from "components/calendar/Calendar";

export const CalendarPage: React.FC = () => {
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
    <>
      <div className="flex flex-row">
        {staffQuery.data.map((staff) => (
          <AvatarTitlePanel
            avatarSrc={staff.image}
            label={staff.name}
            sublabel={staff.role}
            onClick={() => console.log("hehe")}
          />
        ))}
      </div>
      <Calendar
        staff={staffQuery.data}
        appointments={appointmentsQuery.data}
        onClick={onClick}
        {...companyScheduleQuery.data}
      />
    </>
  );
};
