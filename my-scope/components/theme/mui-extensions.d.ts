import "@mui/material/styles";
import {
    AlphaPaletteType,
    BgPaletteType,
    BorderPaletteType,
    ColourPaletteType,
    TextPaletteType,
} from "./Models/customThemeType";

/**
 * Custom type definitions for Material-UI (MUI) theme extensions.
 *
 * Extensions include:
 * - `rounded`: Custom border-radius values for sizes (sm, base, md, etc.).
 * - `shadow`: Custom shadow styles for levels (inner, sm, base, etc.).
 * - `Palette`: Additional color palettes (bg, border, alpha, caution, critical).
 * - `PaletteColor`: Enhanced palette color with hover, active, and optional subdued states.
 * - `TypographyVariants`: Custom typography variants for text sizes and font weights.
 * - `Button`: Extended size and color variants for buttons.
 * - `TextField` and `FormControl`: Additional size overrides.
 * - etc
 */

declare module "@mui/material/styles" {
    interface Theme {
        rounded: {
            sm: number;
            base: number;
            md: number;
            lg: number;
            xl: number;
            "2xl": number;
            "3xl": number;
            full: number;
        };
        shadow: {
            inner: string;
            sm: string;
            base: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
        };
    }

    interface ThemeOptions {
        rounded?: {
            sm?: number;
            base?: number;
            md?: number;
            lg?: number;
            xl?: number;
            "2xl"?: number;
            "3xl"?: number;
            full?: number;
        };
        shadow?: {
            inner?: string;
            sm?: string;
            base?: string;
            md?: string;
            lg?: string;
            xl?: string;
            "2xl"?: string;
        };
    }

    interface Palette {
        bg: BgPaletteType;
        border: BorderPaletteType;
        alpha: AlphaPaletteType;
        caution: ColourPaletteType;
        critical: ColourPaletteType;
    }

    interface PaletteOptions {
        bg?: BgPaletteType;
        border?: BorderPaletteType;
        alpha?: AlphaPaletteType;
        caution?: ColourPaletteType;
        critical?: ColourPaletteType;
    }

    interface PaletteColor {
        main: string;
        hover: string;
        active: string;
        subdued?: {
            main: string;
            hover: string;
            active: string;
        };
    }

    interface TypeText extends TextPaletteType {
        primary: string;
        secondary: string;
    }

    interface TypographyVariants {
        fontWeightLight: number;
        fontWeightRegular: number;
        fontWeightMedium: number;
        fontWeightBold: number;
        xs: React.CSSProperties;
        sm: React.CSSProperties;
        base: React.CSSProperties;
        lg: React.CSSProperties;
        xl: React.CSSProperties;
        "2xl": React.CSSProperties;
        "3xl": React.CSSProperties;
        "4xl": React.CSSProperties;
        "5xl": React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        xs?: React.CSSProperties;
        sm?: React.CSSProperties;
        base?: React.CSSProperties;
        lg?: React.CSSProperties;
        xl?: React.CSSProperties;
        "2xl"?: React.CSSProperties;
        "3xl"?: React.CSSProperties;
        "4xl"?: React.CSSProperties;
        "5xl"?: React.CSSProperties;
    }
}

// Extend Typography props
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        xs: true;
        sm: true;
        base: true;
        lg: true;
        xl: true;
        "2xl": true;
        "3xl": true;
        "4xl": true;
        "5xl": true;
    }
}

// Extend ButtonProps to include custom size xSmall
declare module "@mui/material/Button" {
    export interface ButtonPropsSizeOverrides {
        xSmall: true;
    }
    interface ButtonPropsColorOverrides {
        bg: true;
        border: true;
        alpha: true;
        caution: true;
        critical: true;
        text: true;
    }
}

declare module "@mui/material/TextField" {
    interface TextFieldPropsSizeOverrides {
        large: true;
    }
}

declare module "@mui/material/FormControl" {
    interface FormControlPropsSizeOverrides {
        xSmall: true;
        large: true;
    }
}
