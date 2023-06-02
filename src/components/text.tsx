import { CSSProperties, ReactNode, ElementType } from "react";

import styled from "styled-components";

import { Color, Font, theme } from "theme/theme";
import { XOR } from "utils/types";

export type TextProps = {
  font?: Font;
  tag?: ElementType;
  color?: Color;
  style?: CSSProperties;
  htmlFor?: string;
  caps?: boolean;
  capitalize?: boolean;
  ellipsis?: boolean;
  className?: string;
  tooltip?: string;
} & XOR<{ text: ReactNode }, { children: ReactNode }>;

export function Text(props: TextProps) {
  const {
    text,
    children,
    tag = "span",
    font = "regular16",
    color = "purple100",
    caps = false,
    capitalize = false,
    ellipsis = false,
    style,
    tooltip,
    ...rest
  } = props;

  return (
    <StyledText
      as={tag}
      $font={font}
      children={text ?? children}
      $color={color}
      $ellipsis={ellipsis}
      {...rest}
      style={{
        textTransform: capitalize ? "capitalize" : caps ? "uppercase" : "none",
        ...style,
      }}
    />
  );
}

const StyledText = styled.span<{
  $font: Font;
  $color: Color;
  $ellipsis: boolean;
}>((p) => ({
  display: "block",
  font: theme.font[p.$font],
  color: theme.color[p.$color],
  overflowWrap: "break-word",
  whiteSpace: "pre-wrap",

  ...(p.$ellipsis && {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  }),
}));
