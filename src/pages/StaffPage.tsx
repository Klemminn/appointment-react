import { useStaff } from "api/company";
import { AvatarTitlePanel } from "components/Panels";
import { Table } from "components/Table";

export const StaffPage: React.FC = () => {
  const { data: staff } = useStaff();

  return (
    <Table
      headers={[{ translation: "staff.name" }]}
      rows={staff.map((staff) => [
        <AvatarTitlePanel
          avatarSrc={staff.image}
          label={staff.name}
          sublabel={staff.role}
        />,
      ])}
    />
  );
};
