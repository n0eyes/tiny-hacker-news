import { PropsWithChildren } from "react";

type ShowSwitchProps = PropsWithChildren<{
  show?: boolean;
  hide?: boolean;
  defaultShow?: boolean;
}>;

const ShowSwitch = (props: ShowSwitchProps) => {
  const { show, hide, defaultShow = true, children } = props;

  if (show) return children;

  if (hide) return null;

  return defaultShow ? children : null;
};

export { ShowSwitch };
