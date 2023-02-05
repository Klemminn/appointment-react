import { useServices } from "api/services";
import { Table } from "components/Table";
import { useTranslate } from "translations";

export const ServicesPage: React.FC = () => {
  const { data: services } = useServices();
  const { t } = useTranslate(translations);

  return (
    <Table
      headers={[
        { label: t("name") },
        { label: t("description") },
        { label: t("timeslots") },
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

const translations = {
  is: {
    timeslots: "Tími",
  },
};
