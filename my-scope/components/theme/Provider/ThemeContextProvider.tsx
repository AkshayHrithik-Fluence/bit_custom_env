import { useMemo, useState, useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { lightTheme, darkTheme } from "../theme";
import { ThemeModeContext } from "./ThemeContext";
import { ThemeMode } from "../Models/customThemeType";

export const ThemeContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [mode, setMode] = useState<ThemeMode>(
        (localStorage.getItem("MUI-theme") as ThemeMode) || "light",
    );

    useEffect(() => {
        localStorage.setItem("MUI-theme", mode);
    }, [mode]);

    const toggleMode = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const theme = useMemo(
        () => (mode === "light" ? lightTheme : darkTheme),
        [mode],
    );

    return (
        <ThemeModeContext.Provider value={{ toggleMode, mode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
};
