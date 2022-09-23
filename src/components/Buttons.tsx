import { PencilIcon } from "@heroicons/react/solid";

type EditButtonProps = {
  onClick(): void;
};

export const EditButton: React.FC<EditButtonProps> = (props) => (
  <button className="btn btn-ghost btn-xs" {...props}>
    <PencilIcon className="h-5 w-5" />
  </button>
);
