import { useTranslate } from "translations";
import { CalendarClickEvent } from "types/calendar";

import { Modal } from "./Modal";

type CreateAppointmentModalProps = {
  data: CalendarClickEvent["data"];
};

export const CreateAppointmentModal = ({
  data,
}: CreateAppointmentModalProps) => {
  console.log("props data", data);
  const { t } = useTranslate(translations);

  return (
    <Modal titleText={t("title")}>
      <p className="py-4">
        You've been selected for a chance to get one year of subscription to use
        Wikipedia for free!
      </p>
    </Modal>
  );
};

const translations = {
  is: {
    title: "Bóka tíma",
  },
};
