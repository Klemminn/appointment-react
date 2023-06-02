import {
  ComponentProps,
  createContext,
  FC,
  ReactElement,
  ReactPortal,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import { createCountStore } from "states/create-count-store";
import { pxToRem } from "utils/converters";
import { MakePropertiesOptional } from "utils/types";
import { useWindowDimensions } from "hooks/use-window-dimensions";
import { Color, theme } from "theme/theme";
import { CloseButton as ButtonsCloseButton } from "./buttons";
import { Text } from "./text";

const sidebarStore = createCountStore();

export const hideSidebar = sidebarStore.reset;

export type SidebarOptions = {
  hasBackdrop?: boolean;
  variant?: "REGULAR" | "LARGE" | "CONTENT_HEAVY";
  onHide?(): void;
};

type SidebarRegistry = {
  options?: SidebarOptions;
  contentPortal: ReactPortal;
};

type SidebarComponent = (props: any) => ReactElement;

let sidebarRegistry: SidebarRegistry | null = null;

const SIDEBAR_ID = "sidebar";
const HEADER_ID = "sidebar-header";
const CONTENT_ID = "sidebar-content";
const FOOTER_ID = "sidebar-footer";

export const useSidebar = <
  T extends SidebarComponent,
  K extends ComponentProps<T>
>(
  SidebarComponent: T,
  options?: SidebarOptions
) => {
  const showSidebar = (props?: K) => {
    const sidebarElement = document.getElementById(SIDEBAR_ID);
    if (!sidebarElement) {
      return null;
    }
    // To re-mount the sidebar when it is reopened, so we don't re-use old state
    const ts = Date.now().valueOf();
    const contentPortal = createPortal(
      // @ts-ignore-next-line
      <SidebarComponent key={ts} {...props} />,
      sidebarElement
    );
    sidebarRegistry = { options, contentPortal };
    sidebarStore.increase();
  };

  return showSidebar;
};

const TRANSITION_DURATION = 0.3;
const BACKDROP_OPACITY = 0.3;

const LARGE_BREAKPOINT = 768;
const LARGE_MAX_WIDTH = 728;
const REGULAR_MAX_WIDTH = 472;

const useSidebarWidth = (variant: SidebarOptions["variant"]) => {
  const { width } = useWindowDimensions();
  const dynamicWidth =
    variant !== "REGULAR"
      ? width > LARGE_BREAKPOINT
        ? LARGE_MAX_WIDTH
        : REGULAR_MAX_WIDTH
      : REGULAR_MAX_WIDTH;
  const validWidth = Math.min(width, dynamicWidth);
  return pxToRem(validWidth);
};

export const Sidebar = (props: any) => <div {...props} />;

const VariantContext = createContext<SidebarOptions["variant"]>("REGULAR");

const SidebarProvider = () => {
  const { useStore } = sidebarStore;
  const isActive = useStore((s) => s.count);
  const location = useLocation();
  const { options, contentPortal } = sidebarRegistry ?? {};
  const { hasBackdrop, variant, onHide } = options ?? {};

  const width = useSidebarWidth(variant);

  useEffect(() => {
    hideSidebar();
  }, [location]);

  useEffect(() => {
    if (!isActive) {
      onHide?.();
      sidebarRegistry = null;
    }
    // eslint-disable-next-line
  }, [isActive]);

  return (
    <StyledSidebar id={SIDEBAR_ID}>
      {contentPortal}
      <AnimatePresence>
        {isActive && hasBackdrop && (
          <Backdrop
            initial={{ opacity: 0 }}
            animate={{ opacity: BACKDROP_OPACITY }}
            transition={{ duration: TRANSITION_DURATION }}
            exit={{ opacity: 0 }}
            onClick={hideSidebar}
          />
        )}
      </AnimatePresence>
      <AnimationContainer
        initial={false}
        transition={{ stiffness: 100, duration: TRANSITION_DURATION }}
        animate={{ width: isActive ? width : 0 }}
      >
        <VariantContext.Provider value={variant}>
          <Container width={width}>
            <div id={HEADER_ID} />
            <ContentContainer>
              <ContentWrapper variant={variant}>
                <div id={CONTENT_ID} />
              </ContentWrapper>
            </ContentContainer>
            <div id={FOOTER_ID} />
          </Container>
        </VariantContext.Provider>
      </AnimationContainer>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div({
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: 9998,
  height: "100vh",
  boxShadow: theme.shadow.medium,
});

const AnimationContainer = styled(motion.aside)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  zIndex: 9999,
  backgroundColor: theme.color.primary10,
});

const Container = styled.div(({ width }: { width: string }) => ({
  minWidth: width,
  display: "flex",
  flexDirection: "column" as "column",
  flex: 1,
  overflow: "hidden",
}));

const Backdrop = styled(motion.div)({
  position: "fixed",
  backgroundColor: theme.color.primary100,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: "hidden",
  zIndex: -1,
});

const ContentContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  overflow: "auto",
  minHeight: 0,
  flexGrow: 1,
});

const ContentWrapper = styled.div<Pick<SidebarOptions, "variant">>(
  ({ variant }) => ({
    flex: 1,
    margin:
      variant === "REGULAR" ? pxToRem(24) : `${pxToRem(40)} ${pxToRem(24)}`,
    maxWidth: variant === "CONTENT_HEAVY" ? pxToRem(648) : pxToRem(424),
  })
);

const headerFooterPadding = pxToRem(24);

const Header = styled.div({
  padding: headerFooterPadding,
  borderBottom: `${pxToRem(1)} solid`,
  borderColor: theme.color.primary40,
  backgroundColor: theme.color.primary10,
  "@media (max-width: 768px)": {
    height: pxToRem(72),
  },
});

const Footer = styled.div({
  padding: headerFooterPadding,
  borderTop: `${pxToRem(1)} solid`,
  borderColor: theme.color.primary40,
  backgroundColor: theme.color.primary10,
  "@media (max-width: 768px)": {
    height: pxToRem(72),
  },
  marginTop: pxToRem(24),
});

const SidebarHeader: React.FC = (props) => {
  const headerElement = document.getElementById(HEADER_ID);
  if (!headerElement) {
    return null;
  }

  return createPortal(<Header {...props} />, headerElement);
};

const SidebarContent: React.FC = (props) => {
  const contentElement = document.getElementById(CONTENT_ID);
  if (!contentElement) {
    return null;
  }

  return createPortal(<div {...props} />, contentElement);
};

const SidebarFooter: React.FC = (props) => {
  const footerElement = document.getElementById(FOOTER_ID);
  if (!footerElement) {
    return null;
  }

  return createPortal(<Footer {...props} />, footerElement);
};

type SimpleIconHeaderProps = {
  title: string;
  icon: JSX.Element;
  color?: Color;
  iconColor?: Color;
};

const SimpleIconHeader = ({ title, color, icon }: SimpleIconHeaderProps) => (
  <div className="gap-2 flex content-center">
    {icon}
    <HeaderTitle color={color} title={title} />
  </div>
);

type CloseButtonProps = { onClose?(): void };

export const CloseButton = ({ onClose }: CloseButtonProps) => (
  <ButtonsCloseButton onClick={onClose ?? hideSidebar} />
);

export type SimpleHeaderProps = CloseButtonProps &
  MakePropertiesOptional<SimpleIconHeaderProps, "icon">;

const SimpleHeader: FC<SimpleHeaderProps> = ({
  title,
  icon,
  children,
  onClose,
  ...rest
}) => (
  <SidebarHeader {...rest}>
    <div className="gap-4">
      <div className="gap-2 flex content-center justify-between">
        {icon ? (
          <SimpleIconHeader icon={icon} title={title} {...rest} />
        ) : (
          <HeaderTitle title={title} />
        )}
        <div className="gap-2 flex content-center">
          {children}
          <CloseButton onClose={onClose} />
        </div>
      </div>
    </div>
  </SidebarHeader>
);

const HeaderTitle = ({
  title,
  color,
}: Pick<SimpleHeaderProps, "title" | "color">) => (
  <Text color={color} text={title} font="bold18" />
);

Sidebar.Provider = SidebarProvider;
Sidebar.SimpleHeader = SimpleHeader;
Sidebar.HeaderTitle = HeaderTitle;
Sidebar.Header = SidebarHeader;
Sidebar.Content = SidebarContent;
Sidebar.Footer = SidebarFooter;
