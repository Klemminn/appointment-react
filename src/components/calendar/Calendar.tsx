import { useEffect, useRef } from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  WorkWeek,
  Month,
  Agenda,
  ResourcesDirective,
  ResourceDirective,
} from "@syncfusion/ej2-react-schedule";
import { setCulture, registerLicense } from "@syncfusion/ej2-base";
import { loadCldr, L10n } from "@syncfusion/ej2-base";
import * as gregorian from "cldr-data/main/is/ca-gregorian.json";
import * as numbers from "cldr-data/main/is/numbers.json";
import * as timeZoneNames from "cldr-data/main/is/timeZoneNames.json";

import is from "./translations/is.json";

import * as Panels from "../Panels";

import { Appointment, CompanySchedule, Staff } from "types";

loadCldr(gregorian, numbers, timeZoneNames);
L10n.load({
  is,
});
setCulture("is");

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFac19JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkxhWH5edXZRQGVcU0Y="
);

type CalendarProps = CompanySchedule & {
  appointments: Appointment[];
  staff: Staff[];
};

const Calendar: React.FC<CalendarProps> = ({
  appointments,
  closingTime,
  openingTime,
  workDays,
  staff,
}) => {
  const scheduleRef = useRef(null as any);

  useEffect(() => {
    scheduleRef.current.refreshTemplates();
  }, [staff]);

  return (
    <ScheduleComponent
      group={{ resources: ["staff"] }}
      resourceHeaderTemplate={(props: any) => (
        <StaffHeader staff={props.resourceData} />
      )}
      currentView="Day"
      workDays={workDays}
      startHour={openingTime}
      endHour={closingTime}
      views={["Day", "WorkWeek", "Month", "Agenda"]}
      timezone="UTC"
      ref={(ref) => (scheduleRef.current = ref)}
      allowMultiCellSelection={false}
      popupOpen={(e) => {
        console.log("open", e);
        e.cancel = true;
      }}
      eventSettings={{
        dataSource: appointments,
      }}
    >
      <ResourcesDirective>
        <ResourceDirective
          name="staff"
          field="resourceId"
          textField="name"
          idField="id"
          colorField="color"
          dataSource={staff}
        />
      </ResourcesDirective>
      <Inject services={[Day, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

type StaffHeaderProps = {
  staff: Staff;
};

const StaffHeader: React.FC<StaffHeaderProps> = ({ staff }) => {
  const { image, name, role } = staff;
  return (
    <Panels.AvatarTitlePanel
      avatarSrc={image}
      label={name}
      sublabel={role}
      onClick={() => console.log("hehe")}
    />
  );
};

export default Calendar;
