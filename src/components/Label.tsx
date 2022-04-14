type LabelProps = {
  label: string;
  sublabel?: string;
};

const Label: React.FC<LabelProps> = ({ label, sublabel, ...rest }) => (
  <div {...rest}>
    <div className="font-bold">{label}</div>
    {sublabel && <div className="text-sm opacity-50">{sublabel}</div>}
  </div>
);

export default Label;
