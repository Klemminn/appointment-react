import { useCompanySchedule, useStaff } from "api/company";
import { useAppointments } from "api/appointments";
import { openModal } from "components/modals/ModalHandlers";
import { CalendarClickEvent } from "types/calendar";
import { AvatarTitlePanel } from "components/Panels";
import { Calendar } from "components/calendar/Calendar";
import { createSelectionStore } from "states/create-selection-store";
import { Header } from "components/Header";

const hideStaffStore = createSelectionStore("calendarHiddenStaff");

export const CalendarPage: React.FC = () => {
  const appointmentsQuery = useAppointments();
  const companyScheduleQuery = useCompanySchedule();
  const staffQuery = useStaff();
  const hiddenStaff = hideStaffStore.useStore();

  const onClick = (e: CalendarClickEvent) => {
    const isEmpty = !Object.hasOwn(e.data, "id");
    openModal("CreateAppointmentModal", { data: e.data });
    console.log("isEmpty", isEmpty);
    console.log(e);
  };

  const shownStaff =
    staffQuery.data.length <= 1
      ? staffQuery.data
      : staffQuery.data.filter((staff) => !hiddenStaff[staff.id]);

  return (
    <>
      <Header>
        {staffQuery.data.length <= 1 ? null : (
          <div className="flex flex-row mt-2 mb-2">
            {staffQuery.data.map(
              (staff) =>
                hiddenStaff[staff.id] && (
                  <div className="mr-8 cursor-pointer" key={staff.id}>
                    <AvatarTitlePanel
                      key={staff.id}
                      avatarSrc={staff.image}
                      isGrayscale={hiddenStaff[staff.id]}
                      label={staff.name}
                      sublabel={staff.role}
                      onClick={() => hideStaffStore.toggle(staff.id)}
                    />
                  </div>
                )
            )}
          </div>
        )}
      </Header>
      <Calendar
        staff={shownStaff}
        onHideStaff={hideStaffStore.toggle}
        appointments={appointmentsQuery.data}
        onClick={onClick}
        {...companyScheduleQuery.data}
      />
    </>
  );
};
