import Label from "./Label";
import Avatar from "./Avatar";

type AvatarLabelPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  avatarSrc: string;
  label: string;
  sublabel?: string;
};

export const AvatarTitlePanel: React.FC<AvatarLabelPanelProps> = ({
  avatarSrc,
  label,
  sublabel,
  ...rest
}) => (
  <div className="flex items-center space-x-3" {...rest}>
    <Avatar imageSrc={avatarSrc} />
    <Label label={label} sublabel={sublabel} />
  </div>
);
