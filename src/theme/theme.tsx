const weight = {
  bold: 700,
  semibold: 600,
  regular: 400,
};

const fontSize = {
  "18": "1.125rem/1.5rem",
  "16": "1rem/1.5rem",
  "14": "0.875/1.25rem",
  "12": "0.75rem/1rem",
  "10": "0.625rem/0.75rem",
};

const fonts = `'Work Sans', sans-serif`;

export const theme = {
  color: {
    primary100: "#212529",
    primary90: "#343a40",
    primary80: "#495057",
    primary70: "#6c757d",
    primary60: "#adb5bd",
    primary50: "#ced4da",
    primary40: "#dee2e6",
    primary30: "#e9ecef",
    primary20: "#f8f9fa",
  },
  font: {
    bold18: `${weight.bold} ${fontSize["18"]} ${fonts}`,

    regular16: `${weight.regular} ${fontSize["16"]} ${fonts}`,
    bold16: `${weight.bold} ${fontSize["16"]} ${fonts}`,

    regular14: `${weight.regular} ${fontSize["14"]} ${fonts}`,
    semibold14: `${weight.semibold} ${fontSize["14"]} ${fonts}`,
    bold14: `${weight.bold} ${fontSize["14"]} ${fonts}`,

    regular12: `${weight.regular} ${fontSize["12"]} ${fonts}`,
    semibold12: `${weight.semibold} ${fontSize["12"]} ${fonts}`,
    bold12: `${weight.bold} ${fontSize["12"]} ${fonts}`,

    regular10: `${weight.regular} ${fontSize["10"]} ${fonts}`,
    semibold10: `${weight.semibold} ${fontSize["10"]} ${fonts}`,
  },
};

export type Color = keyof typeof theme.color;
export type Font = keyof typeof theme.font;
