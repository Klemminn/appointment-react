import { Staff } from "./company";
import { Customer } from "./customers";

export type Appointment = {
  id: string;
  customerId?: Customer["id"];
  staffId: Staff["id"];
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  appointmentSMSs: AppointmentSMS[];
  appointmentEmails: AppointmentEmail[];
};

export type AppointmentMessage = {
  appointmentId: Appointment["id"];
  message: string;
  sentDate: Date;
  deliveryDate: Date;
  deliveryReceiptId: string;
};

export type AppointmentSMS = AppointmentMessage & {
  phoneNumber: string;
};

export type AppointmentEmail = AppointmentMessage & {
  email: string;
  subject: string;
};
