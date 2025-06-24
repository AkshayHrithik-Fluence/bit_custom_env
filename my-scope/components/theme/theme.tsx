import { createTheme, PaletteColor } from "@mui/material/styles";

import "@mui/material/styles";

// Type augmentation for custom theme properties (TypeScript only, not emitted to JS)
declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      primary: PaletteColor;
      secondary: PaletteColor;
      neutral: PaletteColor;
    };
    bg: {
      main: string;
      hover: string;
      active: string;
      subdued: {
        main: string;
        hover: string;
        active: string;
      };
    };
    border: {
      main: string;
      hover: string;
      subdued: {
        main: string;
      };
      primary: {
        main: string;
      };
    };
    critical: PaletteColor;
  }

  interface PaletteOptions {
    customColors?: {
      primary?: PaletteColor;
      secondary?: PaletteColor;
      neutral?: PaletteColor;
    };
    bg?: {
      main?: string;
      hover?: string;
      active?: string;
      subdued?: {
        main?: string;
        hover?: string;
        active?: string;
      };
    };
    border?: {
      main?: string;
      hover?: string;
      subdued?: {
        main?: string;
      };
      primary?: {
        main?: string;
      };
    };
    critical?: PaletteColor;
  }  // Note: PaletteColor may already have hover/active in newer MUI versions
  // Commenting out to avoid conflicts
  // interface PaletteColor {
  //   hover: string;
  //   active: string;
  // }

  interface TypeText {
    main: string;
    subdued: string;
    strong: string;
    oncolor: string;
  }

  interface TypographyVariants {
    customHeading: React.CSSProperties;
    base: React.CSSProperties;
    sm: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    customHeading?: React.CSSProperties;
    base?: React.CSSProperties;
    sm?: React.CSSProperties;
  }
  // Extend TypographyPropsVariantOverrides to include custom variants
  // (moved to top-level module declaration above)
  interface Theme {
    rounded: {
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      full: string;
    };
  }

  interface ThemeOptions {
    rounded?: {
      sm?: string;
      base?: string;
      md?: string;
      lg?: string;
      xl?: string;
      "2xl"?: string;
      "3xl"?: string;
      full?: string;
    };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    customHeading: true;
    base: true;
    sm: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xSmall: true;
  }
  interface ButtonPropsColorOverrides {
    critical: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}
import {
    roundedValue,
    lightBoxShadow,
    SPACING,
    typography,
    darkBoxShadows,
} from "./customThemeValues";
import lightPalette from "./tokens/lightTokens";
import darkPalette from "./tokens/darkTokens";

const baseTheme = createTheme({
    spacing: SPACING, // Change unit to 4px (1 = 4px, 2 = 8px, ... etc)
    palette: lightPalette,
    typography,
    shape: {
        borderRadius: 4, // Default border radius
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: "medium", // Set the default size
                disableRipple: true,
                disableElevation: true,
            },
            styleOverrides: {
                root: ({
                    ownerState,
                    theme: { spacing, rounded, palette },
                }) => ({
                    borderRadius: rounded.lg,
                    textTransform: "none",
                    ...(ownerState.size === "xSmall" && {
                        fontSize: "0.875rem",
                        padding: spacing(1.5, 2),
                        height: "1.75rem",
                        lineHeight: "1.25rem",
                    }),
                    ...(ownerState.size === "small" && {
                        fontSize: "0.875rem",
                        padding: spacing(1.5, 2),
                        height: "2rem",
                        lineHeight: "1.25rem",
                    }),
                    ...(ownerState.size === "medium" && {
                        fontSize: "1rem",
                        padding: spacing(2, 3),
                        height: "2.5rem",
                        lineHeight: "1.5rem",
                    }),
                    ...(ownerState.size === "large" && {
                        fontSize: "1.125rem",
                        padding: spacing(3, 4),
                        height: "3rem",
                        lineHeight: "1.75rem",
                    }),
                    ...(ownerState.variant === "contained" && {
                        backgroundColor: (
                            palette[
                                ownerState.color as keyof typeof palette
                            ] as PaletteColor
                        ).main,                        "&:hover": {
                            backgroundColor: (
                                palette[
                                    ownerState.color as keyof typeof palette
                                ] as any
                            ).hover,
                        },
                        "&:active": {
                            backgroundColor: (
                                palette[
                                    ownerState.color as keyof typeof palette
                                ] as any
                            ).active,
                        },                        "&.Mui-disabled": {
                            backgroundColor: (
                                palette[
                                    ownerState.color as keyof typeof palette
                                ] as any
                            ).main,
                            color: palette.text.oncolor,
                            opacity: 0.4,
                            pointerEvents: "none",
                        },
                    }),
                    ...(ownerState.variant === "contained" &&
                        ownerState.color === "critical" && {
                            "&.Mui-disabled": {
                                backgroundColor:
                                    palette?.[ownerState.color]?.main,
                                color: palette.text.strong,
                                opacity: 0.4,
                                pointerEvents: "none",
                            },
                        }),
                    ...(ownerState.variant === "outlined" && {
                        backgroundColor: "transparent",
                        color: palette.text.main,
                        border: `1px solid ${palette.border.main}`,
                        "&:hover": {
                            backgroundColor: palette.bg.subdued.hover,
                        },
                        "&:active": {
                            backgroundColor: palette.bg.subdued.active,
                        },
                        "&.Mui-disabled": {
                            color: palette.text.main,
                            opacity: 0.4,
                            pointerEvents: "none",
                        },
                    }),
                    ...(ownerState.variant === "text" && {
                        backgroundColor: "transparent",
                        color: palette.text.main,

                        "&:hover": {
                            backgroundColor: palette.bg.hover,
                        },
                        "&:active": {
                            backgroundColor: palette.bg.active,
                        },
                        "&.Mui-disabled": {
                            color: palette.text.main,
                            opacity: 0.4,
                            pointerEvents: "none",
                        },
                    }),
                    // TODO: handle loading, other variants
                }),
            },
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true,
            },
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.text.main,
                }),
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: theme.spacing(2),
                    backgroundColor: theme.palette.bg.main,
                    backgroundImage: "none",
                }),
            },
        },
        MuiTypography: {
            defaultProps: {
                variant: "base",
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: "outlined",
                size: "medium", // default size
            },
            styleOverrides: {
                root: ({ ownerState, theme }) => {
                    let sizeStyles = {};

                    switch (ownerState.size) {
                        case "small":
                            sizeStyles = {
                                "& .MuiInputBase-root": {
                                    gap: theme.spacing(2),
                                    minHeight: 36,
                                },
                                "& .MuiInputBase-input": {
                                    padding: theme.spacing(1.5, 2),
                                },
                            };
                            break;
                        case "medium":
                            sizeStyles = {
                                "& .MuiInputBase-root": {
                                    gap: theme.spacing(2),
                                    minHeight: 40,
                                },
                                "& .MuiInputBase-input": {
                                    padding: theme.spacing(2, 3),
                                },
                            };
                            break;
                        case "large":
                            sizeStyles = {
                                "& .MuiInputBase-root": {
                                    gap: theme.spacing(2),
                                    minHeight: 48,
                                },
                                "& .MuiInputBase-input": {
                                    padding: theme.spacing(3),
                                },
                            };
                            break;
                        default:
                            break;
                    }

                    return {
                        ...sizeStyles,
                        "& .MuiOutlinedInput-root": {
                            borderRadius: roundedValue.lg,
                            backgroundColor: theme.palette.bg.main,
                            transition: "all 150ms ease-out", // Animate on hover/focus
                            "& fieldset": {
                                borderColor: theme.palette.border.main,
                            },
                            "&:hover fieldset": {
                                borderColor: theme.palette.border.hover,
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: theme.palette.border.primary.main,
                                borderWidth: 2,
                            },
                            "&.Mui-disabled": {
                                "& fieldset": {
                                    borderColor: theme.palette.border.main,
                                },
                                Opacity: 0.4,
                                pointerEvents: "none",
                            },
                        },
                        "& .MuiInputLabel-root": {
                            display: "none",
                        },
                        "& .MuiInputBase-input::placeholder": {
                            color: theme.palette.text.disabled,
                            fontWeight: theme.typography.fontWeightRegular,
                            lineHeight: 20,
                            fontSize: 14,
                            opacity: 1,
                        },
                        "& .MuiFormHelperText-root": {
                            marginLeft: theme.spacing(0.5),
                        },
                    };
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                asterisk: ({ theme }) => ({
                    color: theme.palette.critical.main,
                }),
            },
        },
        // Styles for the Menu's Paper component
        MuiMenu: {
            styleOverrides: {
                paper: ({ theme }) => ({
                    borderRadius: theme.rounded.lg,
                    backgroundColor: theme.palette.bg.main,
                    border: `1px solid ${theme.palette.border.main}`,
                    "& .MuiList-root": {
                        paddingTop: theme.spacing(3),
                        paddingBottom: theme.spacing(3),
                    },
                }),
            },
        },
        // Styles for the MenuItem component
        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: `4px ${theme.spacing(3)}`,
                    height: 36,
                    "&.Mui-selected": {
                        backgroundColor: theme.palette.bg.active,
                        "&:hover": {
                            backgroundColor: theme.palette.bg.active,
                        },
                    },
                    "&:hover": {
                        backgroundColor: theme.palette.bg.hover,
                    },
                }),
            },
        },
        MuiChip: {
            styleOverrides: {
                root: ({ theme }) => ({
                    padding: theme.spacing(1),
                    backgroundColor: theme.palette.bg.hover,
                    color: theme.palette.text.main,
                    borderRadius: theme.rounded.full,
                    fontWeight: 500,
                    "& .MuiChip-icon": {
                        color: theme.palette.text.main,
                        backgroundColor: "none",
                    },
                    "& .MuiChip-label": {
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(1),
                        marginRight: theme.spacing(1),
                    },
                }),
            },
        },
    },
    // eslint-disable-next-line
    shadows: Array(25).fill("none") as any, // Disables shadows
});

// Extend the theme with additional properties (rounded, shadow, etc)
const theme = createTheme(baseTheme, {
    rounded: roundedValue,
    shadow: lightBoxShadow,
});

// Extend the theme with additional properties (rounded, shadow, etc)
const darkTheme = createTheme(theme, {
    palette: darkPalette,
    rounded: roundedValue,
    shadow: darkBoxShadows,
});

export { theme as lightTheme, darkTheme };
