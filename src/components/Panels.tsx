import { Label } from "./label";
import { Avatar, AvatarProps } from "./avatar";

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
  children,
  ...rest
}) => (
  <div className="flex items-center justify-between space-x-3" {...rest}>
    <div className="flex items-center space-x-3">
      <Avatar imageSrc={avatarSrc} isGrayscale={isGrayscale} />
      <Label label={label} sublabel={sublabel} />
    </div>
    {children}
  </div>
);
