import { Label } from "./Label";
import { Avatar, AvatarProps } from "./Avatar";

type AvatarLabelPanelProps = React.HTMLAttributes<HTMLDivElement> & {
  avatarSrc: AvatarProps["imageSrc"];
  isGrayscale?: AvatarProps["isGrayscale"];
  label: string;
  sublabel?: string;
};

export const AvatarTitlePanel: React.FC<AvatarLabelPanelProps> = ({
  avatarSrc,
  label,
  sublabel,
  isGrayscale,
  ...rest
}) => (
  <div className="flex items-center space-x-3" {...rest}>
    <Avatar imageSrc={avatarSrc} isGrayscale={isGrayscale} />
    <Label label={label} sublabel={sublabel} />
  </div>
);
