import { useQuery } from "@tanstack/react-query";

import { CompanySchedule, Staff } from "types";

const defaultCompanySchedule: CompanySchedule = {
  workDays: [1, 2, 3, 4, 5],
  openingTime: "08:00",
  closingTime: "16:00",
};

export const useCompanySchedule = () => {
  return useQuery(["companySchedule"], getCompanySchedule, {
    initialData: defaultCompanySchedule,
  });
};

const getCompanySchedule = async (): Promise<CompanySchedule> => {
  return {
    workDays: [1, 3, 5, 6],
    openingTime: "08:00",
    closingTime: "18:00",
  };
};

export const useStaff = () => {
  return useQuery(["staff"], getStaff, {
    initialData: [],
  });
};

const getStaff = async (): Promise<Staff[]> => {
  return [
    {
      id: "1",
      name: "Will Smith",
      color: "#ea7a57",
      role: "Cardioligst",
      image:
        "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png",
    },
    {
      id: "2",
      name: "Alice",
      color: "#7fa900",
      role: "Neurologist",
      image:
        "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png",
    },
    {
      id: "3",
      name: "Robson",
      color: "#7fa900",
      role: "Orthopedic Surgeon",
      image:
        "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png",
    },
    {
      id: "4",
      name: "Count Dracula",
      color: "#7fa900",
      role: "Orthopedic Surgeon",
      image:
        "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png",
    },
  ];
};
