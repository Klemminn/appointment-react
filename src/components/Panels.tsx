import Label from "./Label";
import Avatar from "./Avatar";

type AvatarLabelPanelProps = {
  avatarSrc: string;
  label: string;
  sublabel?: string;
};

export const AvatarTitlePanel: React.FC<AvatarLabelPanelProps> = ({
  avatarSrc,
  label,
  sublabel,
}) => (
  <div className="flex items-center space-x-3">
    <Avatar imageSrc={avatarSrc} />
    <Label label={label} sublabel={sublabel} />
  </div>
);
