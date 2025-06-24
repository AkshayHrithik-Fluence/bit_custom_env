import { fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ThemeModeContext } from "@my-scope/theme";
import { ThemeMode,lightTheme } from "@my-scope/theme";
import {MemoryRouter} from "react-router-dom"
import { ThemeProvider } from "@emotion/react";
import { Theme } from "@mui/material/styles";
import { render, RenderResult } from "@testing-library/react";
import { ReactNode } from "react";

import Header, {
    HeaderBrand,
    HeaderNavigation,
    HeaderUserProgfile,
    Routes,
} from "../Header";

const mockUser = {
    name: "John Doe",
    picture: "https://example.com/avatar.jpg",
    email: "john.doe@example.com",
};



type RenderComponentOptions = {
    theme?: Theme; // Allows overriding the default theme
    initialEntries?: string[]; // Allows setting initial routes for MemoryRouter
};

/**
 * Utility function to render a React component with common providers.
 *
 * @param children - The React node to render.
 * @param options - Optional configuration for theme, reactQuery, and initial routes.
 * @returns RenderResult from @testing-library/react.
 */
const renderComponent = (
    children: ReactNode,
    options: RenderComponentOptions = {},
): RenderResult => {
    const { theme = lightTheme, initialEntries = ["/"] } = options;

    return render(
        <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={initialEntries}>
                {children}
            </MemoryRouter>
        </ThemeProvider>,
    );
};

export default renderComponent;


const mockRoutes: Routes[] = [
    { label: "Home", route: "/home" },
    { label: "About", route: "/about" },
];

describe("Header Component", () => {
    it("renders the default HeaderBrand", () => {
        renderComponent(<Header brandName="Reliability" user={mockUser} />);

        expect(screen.getByText("Reliability")).toBeInTheDocument();
    });

    it("renders the default HeaderNavigation with routes", () => {
        renderComponent(
            <Header
                brandName="Reliability"
                user={mockUser}
                routes={mockRoutes}
            />,
        );

        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("About")).toBeInTheDocument();
    });

    it("renders the default HeaderUserProgfile with user avatar", () => {
        renderComponent(<Header brandName="Reliability" user={mockUser} />);

        const avatar = screen.getByAltText("User Avatar");
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute("src", mockUser.picture);
    });

    it("renders custom components when provided and defaults otherwise", () => {
        renderComponent(
            <Header brandName="Reliability" user={mockUser}>
                <HeaderBrand>
                    <div>Custom Brand</div>
                </HeaderBrand>
                <HeaderNavigation>
                    <div>Custom Navigation</div>
                </HeaderNavigation>
                <HeaderUserProgfile>
                    <div>Custom Profile</div>
                </HeaderUserProgfile>
            </Header>,
        );

        expect(screen.getByText("Custom Brand")).toBeInTheDocument();
        expect(screen.getByText("Custom Navigation")).toBeInTheDocument();
        expect(screen.getByText("Custom Profile")).toBeInTheDocument();
    });

    it("renders a mix of custom and default components when some are provided", () => {
        renderComponent(
            <Header brandName="Reliability" user={mockUser}>
                <HeaderBrand>
                    <div>Custom Brand</div>
                </HeaderBrand>
                <HeaderNavigation>
                    <div>Custom Navigation</div>
                </HeaderNavigation>
            </Header>,
        );

        expect(screen.getByText("Custom Brand")).toBeInTheDocument();
        expect(screen.getByText("Custom Navigation")).toBeInTheDocument();
        const avatar = screen.getByAltText("User Avatar"); // default

        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute("src", mockUser.picture);
    });

    it("renders light mode icon when mode is light", () => {
        const toggleModeMock = vi.fn();

        renderComponent(
            <ThemeModeContext.Provider
                value={{ mode: "light", toggleMode: toggleModeMock }}
            >
                <Header brandName="Reliability" user={mockUser} />
            </ThemeModeContext.Provider>,
        );

        // Assert that the dark mode icon is displayed
        expect(screen.getByTestId("DarkModeIcon")).toBeInTheDocument();
    });

    it("renders dark mode icon when mode is dark", () => {
        const toggleModeMock = vi.fn();

        renderComponent(
            <ThemeModeContext.Provider
                value={{ mode: "dark", toggleMode: toggleModeMock }}
            >
                <Header brandName="Reliability" user={mockUser} />
            </ThemeModeContext.Provider>,
        );

        // Assert that the light mode icon is displayed
        expect(screen.getByTestId("LightModeIcon")).toBeInTheDocument();
    });

    it("toggleModeMock is called when toggle button is clicked", () => {
        let mode: ThemeMode = "light";
        const toggleModeMock = vi.fn(() => {
            mode = mode === "light" ? "dark" : "light";
        });

        renderComponent(
            <ThemeModeContext.Provider
                value={{ mode, toggleMode: toggleModeMock }}
            >
                <Header brandName="Reliability" user={mockUser} />
            </ThemeModeContext.Provider>,
        );

        // Find the theme toggle button
        const toggleButton = screen.getByTestId("theme-toggle-button");

        // Assert initial state
        expect(screen.getByTestId("DarkModeIcon")).toBeInTheDocument();

        // Simulate a click on the toggle button
        fireEvent.click(toggleButton);

        // Assert that the toggleMode function was called
        expect(toggleModeMock).toHaveBeenCalledTimes(1);
    });
});
