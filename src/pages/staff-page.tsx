import { useStaff } from "api/company";
import { AvatarTitlePanel } from "components/panels";
import { Table } from "components/table";
import { useTranslate } from "translations";

export const StaffPage: React.FC = () => {
  const { data: staff } = useStaff();
  const { t } = useTranslate();

  return (
    <Table
      headers={[{ label: t("name") }]}
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
