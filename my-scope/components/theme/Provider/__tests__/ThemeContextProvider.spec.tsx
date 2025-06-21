import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ThemeModeContext } from "../ThemeContext";
import { ThemeContextProvider } from "../ThemeContextProvider";

describe("ThemeContextProvider", () => {
    afterEach(() => {
        localStorage.clear();
    });

    it("renders children correctly", () => {
        render(
            <ThemeContextProvider>
                <div>Test Child</div>
            </ThemeContextProvider>,
        );

        expect(screen.getByText("Test Child")).toBeInTheDocument();
    });

    it("provides the default theme mode as 'light'", () => {
        render(
            <ThemeContextProvider>
                <ThemeModeContext.Consumer>
                    {({ mode }) => <div>Current Mode: {mode}</div>}
                </ThemeModeContext.Consumer>
            </ThemeContextProvider>,
        );

        expect(screen.getByText("Current Mode: light")).toBeInTheDocument();
    });

    it("toggles the theme mode between 'light' and 'dark'", async () => {
        const user = userEvent.setup();

        render(
            <ThemeContextProvider>
                <ThemeModeContext.Consumer>
                    {({ mode, toggleMode }) => (
                        <div>
                            <div>Current Mode: {mode}</div>
                            <button onClick={toggleMode}>Toggle Mode</button>
                        </div>
                    )}
                </ThemeModeContext.Consumer>
            </ThemeContextProvider>,
        );

        // Verify default mode is 'light'
        expect(screen.getByText("Current Mode: light")).toBeInTheDocument();

        // Toggle to 'dark'
        await user.click(screen.getByText("Toggle Mode"));
        expect(screen.getByText("Current Mode: dark")).toBeInTheDocument();

        // Toggle back to 'light'
        await user.click(screen.getByText("Toggle Mode"));
        expect(screen.getByText("Current Mode: light")).toBeInTheDocument();
    });

    it("persists the theme mode in localStorage", async () => {
        const user = userEvent.setup();

        render(
            <ThemeContextProvider>
                <ThemeModeContext.Consumer>
                    {({ mode, toggleMode }) => (
                        <div>
                            <div>Current Mode: {mode}</div>
                            <button onClick={toggleMode}>Toggle Mode</button>
                        </div>
                    )}
                </ThemeModeContext.Consumer>
            </ThemeContextProvider>,
        );

        // Verify default mode is 'light'
        expect(localStorage.getItem("MUI-theme")).toBe("light");

        // Toggle to 'dark'
        await user.click(screen.getByText("Toggle Mode"));
        expect(localStorage.getItem("MUI-theme")).toBe("dark");

        // Toggle back to 'light'
        await user.click(screen.getByText("Toggle Mode"));
        expect(localStorage.getItem("MUI-theme")).toBe("light");
    });

    it("uses the theme mode from localStorage if available", () => {
        localStorage.setItem("MUI-theme", "dark");

        render(
            <ThemeContextProvider>
                <ThemeModeContext.Consumer>
                    {({ mode }) => <div>Current Mode: {mode}</div>}
                </ThemeModeContext.Consumer>
            </ThemeContextProvider>,
        );

        expect(screen.getByText("Current Mode: dark")).toBeInTheDocument();
    });
});

describe("ThemeModeContext", () => {
    it("provides default values for mode and toggleMode", () => {
        render(
            <ThemeModeContext.Consumer>
                {({ mode, toggleMode }) => (
                    <div>
                        <div>Mode: {mode}</div>
                        <button onClick={toggleMode}>Toggle Mode</button>
                    </div>
                )}
            </ThemeModeContext.Consumer>,
        );

        // Assert the default mode
        expect(screen.getByText("Mode: light")).toBeInTheDocument();

        // Assert that the default toggleMode is a no-op function
        const toggleButton = screen.getByText("Toggle Mode");
        expect(toggleButton).toBeInTheDocument();

        // Simulate a click to ensure no errors occur
        toggleButton.click();
    });
});
