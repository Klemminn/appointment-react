import { useCustomers } from "api/customers";
import { Table } from "components/Table";
import { useTranslate } from "translations";

export const CustomersPage: React.FC = () => {
  const { data: customers } = useCustomers();
  const { t } = useTranslate(translations);

  console.log("customers", customers);

  return (
    <Table
      headers={[
        { label: t("name") },
        { label: t("phoneNumber") },
        { label: t("numberOfVisits"), justify: "center" },
        { label: t("nextVisit") },
      ]}
      rows={customers.map((customer) => [
        <div>{customer.name}</div>,
        <div>{customer.phone}</div>,
        <div>73</div>,
        <div>18. ágúst 2022</div>,
      ])}
    />
  );
};

const translations = {
  is: {
    numberOfVisits: "Fjöldi heimsókna",
    nextVisit: "Næsta heimsókn",
  },
};
