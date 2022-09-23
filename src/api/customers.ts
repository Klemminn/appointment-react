import { useQuery } from "@tanstack/react-query";

import { Customer } from "types";

export const useCustomers = () => {
  return useQuery(["customers"], getCustomers, {
    initialData: [],
  });
};

export const getCustomers = async (): Promise<Customer[]> => {
  return [
    {
      id: "0",
      name: "Klemenz Hrafn Kristjánsson",
      phone: "8968120",
    },
  ];
};
