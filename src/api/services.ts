import { useQuery } from "@tanstack/react-query";

import { Service } from "types/services";

export const useServices = () =>
  useQuery(["services"], getServices, {
    initialData: [],
  });

export const getServices = async (): Promise<Service[]> => {
  return [
    {
      id: "0",
      name: "Herraklipping",
      description: "Geggjuð klipping",
      timeslots: [
        {
          id: "0",
          serviceId: "0",
          minutes: 30,
          isWait: false,
        },
      ],
    },
  ];
};
