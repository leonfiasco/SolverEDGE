import { SetStateAction, Dispatch } from "react";

export interface ThemeContextValue {
  toggleNav: () => void;
  navDrawOpen: boolean;
  setNavDrawOpen: Dispatch<SetStateAction<boolean>>;

  setActive: (bool: boolean) => void;
  isActive: boolean;
}
