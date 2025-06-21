import { Button, Stack, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation } from "react-router-dom";
import React, { ReactNode } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "@my-scope/theme";
import Fluence from "./Fluence";
import Menu from "./Menu";
import Setting from "./Setting";

const HEADER_HEIGHT = "56px";

const HeaderBrandDefault = ({ title }: { title: string }) => {
    const { palette } = useTheme();
    return (
        <>
            <IconButton
                sx={{
                    p: 0,
                }}
            >
                <Fluence height={32} width={32} color={palette.text.main} />
            </IconButton>
            <Typography
                variant="sm"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    fontWeight: 500,
                    color: palette.text.subdued,
                    textDecoration: "none",
                }}
            >
                {title}
            </Typography>
        </>
    );
};

const HeaderNavigationDefault = ({ routes: pages }: { routes?: Routes[] }) => {
    const { palette } = useTheme();
    const location = useLocation();
    return (
        <>
            {pages?.map((page) => (
                <Button
                    component={NavLink}
                    key={page.label}
                    sx={{
                        my: 2,
                        color: palette.text.subdued,
                        display: "block",
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                        "&:active": {
                            backgroundColor: "transparent",
                        },
                    }}
                    to={page.route}
                    variant="text"
                >
                    <Typography
                        variant="sm"
                        noWrap
                        sx={{
                            mr: 2,
                            fontWeight: 500,
                            color: palette.text.main,
                            textDecoration: "none",
                            opacity: page.route === location.pathname ? 1 : 0.4,
                        }}
                    >
                        {page.label}
                    </Typography>
                </Button>
            ))}
        </>
    );
};
// eslint-disable-next-line
const HeaderUserProgfileDefault = ({ user }: { user: any }) => {
    const theme = useTheme();
    const { mode, toggleMode } = useThemeMode();
    return (
        <>
            <IconButton
                sx={{
                    p: 2.5,
                    width: 40,
                    height: 40,
                }}
                onClick={toggleMode}
                data-testid="theme-toggle-button"
            >
                {mode === "dark" ? (
                    <LightModeIcon sx={{ width: 20, height: 20 }} />
                ) : (
                    <DarkModeIcon sx={{ width: 20, height: 20 }} />
                )}
            </IconButton>
            <IconButton
                sx={{
                    p: 2.5,
                    width: 40,
                    height: 40,
                }}
            >
                <Setting color={theme.palette.text.subdued} />
            </IconButton>
            <IconButton
                sx={{
                    p: 2.5,
                    width: 40,
                    height: 40,
                }}
            >
                <Menu color={theme.palette.text.subdued} />
            </IconButton>
            <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                    <Avatar
                        alt="User Avatar"
                        src={user?.picture}
                        sx={{ width: 32, height: 32 }}
                    />
                </IconButton>
            </Tooltip>
        </>
    );
};

interface HeaderProps {
    children: ReactNode;
}
export type Routes = {
    label: string;
    route: string;
};

export const HeaderNavigation = ({ children }: HeaderProps) => <>{children}</>;
export const HeaderUserProgfile = ({ children }: HeaderProps) => (
    <>{children}</>
);
export const HeaderBrand = ({ children }: HeaderProps) => <>{children}</>;

type HeaderPropsType = {
    brandName: string;
    routes?: Routes[];
    // eslint-disable-next-line
    user: any;
    headerHeight?: string;
    children?: ReactNode;
};

function Header({
    brandName,
    user,
    children,
    routes,
    headerHeight = HEADER_HEIGHT,
}: HeaderPropsType) {
    const { palette } = useTheme();

    let brand = <HeaderBrandDefault title={brandName} />;
    let navigation = <HeaderNavigationDefault routes={routes} />;
    let profile = <HeaderUserProgfileDefault user={user} />;

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        if (child.type === HeaderBrand) {
            brand = child;
        } else if (child.type === HeaderNavigation) {
            navigation = child;
        } else if (child.type === HeaderUserProgfile) {
            profile = child;
        }
    });

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: palette.bg.hover,
                    height: headerHeight,
                    borderBottom: `1px solid ${palette.border.subdued.main}`,
                }}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        justifyContent: "space-between",
                        height: `${headerHeight}`,
                        "@media (min-width:600px)": {
                            minHeight: `${headerHeight}`,
                        },
                    }}
                >
                    <Stack
                        direction="row"
                        gap={2}
                        px={3}
                        alignItems="center"
                        justifyContent="center"
                    >
                        {brand}
                    </Stack>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {navigation}
                    </Box>
                    <Stack
                        direction="row"
                        gap={1}
                        px={3}
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {profile}
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
}
export default Header;
