export type NavigatorProps = {
  routers: Array<RoutersProps>;
};
export type RoutersProps = {
  path: string;
  label: string;
  flAdmin: boolean;
  flAuth: boolean;
};
