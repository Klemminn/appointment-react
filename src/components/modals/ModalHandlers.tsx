import create from "zustand";

import { CreateAppointmentModal } from "./CreateAppointmentModal";

const modals = {
  CreateAppointmentModal,
};

type ModalName = keyof typeof modals;

type UseCurrentModalProps = {
  current: ModalName | null;
  props: any;
};

const useCurrentModal = create<UseCurrentModalProps>(() => ({
  current: null,
  props: undefined,
}));

export const openModal = (modalName: ModalName, props?: any) =>
  useCurrentModal.setState({ current: modalName, props });

export const closeModal = () =>
  useCurrentModal.setState({ current: null, props: undefined });

export const ModalProvider = () => {
  const currentModal = useCurrentModal((state) => state.current);
  const currentProps = useCurrentModal((state) => state.props);
  if (currentModal) {
    const Modal = modals[currentModal];
    return <Modal {...(currentProps ?? {})} />;
  }
  return null;
};
