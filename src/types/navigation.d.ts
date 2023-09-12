import { ReactComponentElement } from "react";

export interface IRoute {
  name: string;
  layout: string; 
  icon: ReactComponentElement | string;
  secondary?: boolean;
  path: string;
}
