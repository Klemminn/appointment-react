import { useStaff } from "api";
import { Table, Panels } from "components";

const StaffPage: React.FC = () => {
  const { data: staff } = useStaff();

  return (
    <Table
      headers={[{ translation: "staff.name" }]}
      rows={staff.map((staff) => [
        <Panels.AvatarTitlePanel
          avatarSrc={staff.image}
          label={staff.name}
          sublabel={staff.role}
        />,
      ])}
    />
  );
};

export default StaffPage;
