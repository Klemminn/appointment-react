import { closeModal } from "./ModalHandlers";

type ModalProps = {
  titleText: string;
};

const Modal: React.FC<ModalProps> = ({ children, titleText }) => (
  <>
    <input
      type="checkbox"
      className="modal-toggle"
      onChange={closeModal}
      id="modal-toggler"
    />
    <label htmlFor="modal-toggler" className="modal modal-open">
      <label className="modal-box relative">
        <h3 className="text-lg font-bold">{titleText}</h3>
        {children}
      </label>
    </label>
  </>
);

export default Modal;
