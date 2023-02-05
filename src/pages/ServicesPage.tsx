import { useServices } from "api/services";
import { Table } from "components/Table";

export const ServicesPage: React.FC = () => {
  const { data: services } = useServices();

  return (
    <Table
      headers={[
        { translation: "services.name" },
        { translation: "services.description" },
        { translation: "services.timeslots" },
      ]}
      rows={services.map((service) => [
        <div>{service.name}</div>,
        <div>{service.description}</div>,
        <div>
          {service.timeslots.map((slot) => (
            <div key={slot.id}>{slot.minutes}</div>
          ))}
        </div>,
      ])}
    />
  );
};
