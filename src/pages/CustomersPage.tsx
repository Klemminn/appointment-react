import { useCustomers } from "api/customers";
import { Table } from "components/Table";

export const CustomersPage: React.FC = () => {
  const { data: customers } = useCustomers();

  console.log("customers", customers);

  return (
    <Table
      headers={[
        { translation: "customers.name" },
        { translation: "customers.phoneNumber" },
        { translation: "customers.numberOfVisits", justify: "center" },
        { translation: "customers.nextVisit" },
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
