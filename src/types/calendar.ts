import { Appointment } from "./appointment";
import { Staff } from "./company";

export type CalendarClickEvent = {
  cancel: boolean;
  data: {
    endTime: Date;
    IsAllDay: boolean;
    startTime: Date;
    staffId: Staff["id"];
    id?: Appointment["id"];
    Subject?: string;
  };
};
