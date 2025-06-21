import { createContext } from "react";

export const ThemeModeContext = createContext({
    toggleMode: () => {},
    mode: "light" as "light" | "dark",
});
