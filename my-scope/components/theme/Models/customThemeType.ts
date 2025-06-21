export type BgPaletteType = {
    main: string;
    hover: string;
    active: string;
    disabled: string;
    overlay: {
        main: string;
        hover: string;
        active: string;
    };
    subdued: {
        main: string;
        hover: string;
        active: string;
    };
    strong: {
        main: string;
        hover: string;
        active: string;
    };
    inverse: {
        main: string;
        hover: string;
        active: string;
    };
} & ColouPalettes;

export type BorderPaletteType = {
    main: string;
    hover: string;
    active: string;
    disabled: string;
    subdued: {
        main: string;
        hover: string;
        active: string;
    };
    strong: {
        main: string;
        hover: string;
        active: string;
    };
    inverse: {
        main: string;
        hover: string;
        active: string;
    };
} & ColouPalettes;

export type AlphaPaletteType = {
    transparent: {
        main: string;
        inverted: string;
    };
    overlay: string;
};

export type ColourPaletteType = {
    main: string;
    hover: string;
    active: string;
    subdued?: {
        main: string;
        hover: string;
        active: string;
    };
};

export type TextPaletteType = {
    main: string;
    disabled: string;
    subdued: string;
    oncolor: string;
    strong: string;
    inverse: {
        main: string;
        subdued: string;
    };
} & ExtendedTextPaletteType;

type ColouPalettes = {
    primary: ColourPaletteType;
    secondary: ColourPaletteType;
    success: ColourPaletteType;
    caution: ColourPaletteType;
    critical: ColourPaletteType;
    info: ColourPaletteType;
};

type VariantTextPaletteType = {
    main: string;
    strong: string;
    hover?: string;
    active?: string;
};

type ExtendedTextPaletteType = {
    primaryCustom: VariantTextPaletteType;
    secondaryCustom: VariantTextPaletteType;
    success: VariantTextPaletteType;
    caution: VariantTextPaletteType;
    critical: VariantTextPaletteType;
    info: VariantTextPaletteType;
};

export type ThemeMode = "light" | "dark";
