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
  console.log("staff");
  return [
    {
      id: "1",
      name: "Jói klipp",
      color: "#ea7a57",
      role: "Eigandi",
      image:
        "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png",
    },
    {
      id: "2",
      name: "Magga hár",
      color: "#7fa900",
      role: "Klippsnillingur",
      image:
        "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png",
    },
    {
      id: "3",
      name: "Sigga skegg",
      color: "#7fa900",
      role: "Skeggsnyrtir",
      image:
        "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_2560%2Cc_limit/best-face-oil.png",
    },
  ];
};
