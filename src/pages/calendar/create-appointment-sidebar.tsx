import { Sidebar, useSidebar } from "components/sidebar";
import { useTranslate } from "translations";

export const useCreateAppointmentSidebar = () =>
  useSidebar(CreateAppointmentSidebar);

type CreateAppointmentSidebarProps = {
  data: any;
};

const CreateAppointmentSidebar = (props: CreateAppointmentSidebarProps) => {
  console.log(props.data);
  const { t } = useTranslate(locale);

  return (
    <Sidebar>
      <Sidebar.SimpleHeader title={t("createAppointment")} />
      <Sidebar.Content>Such great content!</Sidebar.Content>
    </Sidebar>
  );
};

const locale = {
  is: {
    createAppointment: "Skrá tíma",
  },
};
