export type Service = {
  id: string;
  name: string;
  description?: string;
  timeslots: ServiceTimeslot[];
};

export type ServiceTimeslot = {
  id: string;
  serviceId: Service["id"];
  minutes: number;
  isWait: boolean;
  defaultColor?: string;
};
