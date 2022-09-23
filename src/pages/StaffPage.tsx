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
        <div>787-1234</div>,
        <div className="flex justify-end">73</div>,
        <div>18. ágúst 2022</div>,
      ])}
    />
  );
};

export default StaffPage;
