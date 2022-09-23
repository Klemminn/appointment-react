import { useQuery } from "@tanstack/react-query";

import { Appointment } from "types";

export const useAppointments = () => {
  return useQuery(["appointments"], getAppointments, {
    initialData: [],
  });
};

export const getAppointments = async (): Promise<Appointment[]> => {
  return [
    {
      id: "2",
      resourceId: "3",
      Subject: "Great success",
      StartTime: new Date(2022, 8, 21, 10, 0),
      EndTime: new Date(2022, 8, 21, 12, 30),
    },
  ];
};
