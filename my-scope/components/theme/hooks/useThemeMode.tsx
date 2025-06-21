import { useContext } from "react";

import { ThemeModeContext } from "../Provider/ThemeContext";

export const useThemeMode = () => useContext(ThemeModeContext);
