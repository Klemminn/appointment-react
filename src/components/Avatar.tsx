export type AvatarProps = {
  imageSrc: string;
  isGreyscale?: boolean;
  alt?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ imageSrc, alt }) => (
  <div className="avatar">
    <div className="mask mask-squircle w-12 h-12">
      <img src={imageSrc} alt={alt} />
    </div>
  </div>
);
