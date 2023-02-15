export type NavigatorProps = {
  routers: Array<RoutersProps>;
  //RoutersProps[]
};
type RoutersProps = {
  path: string;
  label: string;
};
