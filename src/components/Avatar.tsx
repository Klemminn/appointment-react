import classNames from "classnames";

export type AvatarProps = {
  imageSrc: string;
  isGrayscale?: boolean;
  alt?: string;
};

export const Avatar: React.FC<AvatarProps> = ({
  isGrayscale,
  imageSrc,
  alt,
}) => (
  <div className="avatar">
    <div
      className={classNames(
        "mask",
        "mask-squircle",
        "w-12",
        "h-12",
        isGrayscale && "grayscale"
      )}
    >
      <img src={imageSrc} alt={alt} />
    </div>
  </div>
);
