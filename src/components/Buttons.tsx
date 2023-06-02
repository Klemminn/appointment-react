import { PencilIcon, XIcon } from "@heroicons/react/solid";

type ButtonProps = {
  onClick(): void;
};

export const EditButton: React.FC<ButtonProps> = (props) => (
  <button className="btn btn-ghost btn-xs" {...props}>
    <PencilIcon className="h-5 w-5" />
  </button>
);

export const CloseButton: React.FC<ButtonProps> = (props) => (
  <button className="btn btn-ghost btn-xs" {...props}>
    <XIcon className="h-5 w-5" />
  </button>
);
