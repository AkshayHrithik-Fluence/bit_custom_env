import { applyToPrimitiveVal } from "../utils";

const rawLightPalette = {
    primary: {
        main: "--sky-500",
        hover: "--sky-600",
        active: "--sky-700",
        subdued: {
            main: "--sky-50",
            hover: "--sky-100",
            active: "--sky-200",
        },
    },
    secondary: {
        main: "--water-500",
        hover: "--water-600",
        active: "--water-700",
        subdued: {
            main: "--water-100",
            hover: "--water-200",
            active: "--water-300",
        },
    },
    success: {
        main: "--earth-500",
        hover: "--earth-600",
        active: "--earth-700",
        subdued: {
            main: "--earth-100",
            hover: "--earth-200",
            active: "--earth-300",
        },
    },
    caution: {
        main: "--sunshine-500",
        hover: "--sunshine-600",
        active: "--sunshine-700",
        subdued: {
            main: "--sunshine-100",
            hover: "--sunshine-200",
            active: "--sunshine-300",
        },
    },
    critical: {
        main: "--sunset-500",
        hover: "--sunset-600",
        active: "--sunset-700",
        subdued: {
            main: "--sunset-100",
            hover: "--sunset-200",
            active: "--sunset-300",
        },
    },
    info: {
        main: "--plum-500",
        hover: "--plum-600",
        active: "--plum-700",
        subdued: {
            main: "--plum-100",
            hover: "--plum-200",
            active: "--plum-300",
        },
    },
    bg: {
        main: "--neutral-00",
        hover: "--neutral-100",
        active: "--neutral-200",
        disabled: "--neutral-50",
        subdued: {
            main: "--neutral-100",
            hover: "--neutral-200",
            active: "--neutral-300",
        },
        strong: {
            main: "--neutral-300",
            hover: "--neutral-400",
            active: "--neutral-500",
        },
        inverse: {
            main: "--neutral-900",
            hover: "--neutral-700",
            active: "--neutral-600",
        },
        overlay: {
            main: "--neutral-00",
            hover: "--neutral-100",
            active: "--neutral-200",
        },
        primary: {
            main: "--sky-500",
            hover: "--sky-600",
            active: "--sky-700",
            subdued: {
                main: "--sky-50",
                hover: "--sky-100",
                active: "--sky-200",
            },
        },
        secondary: {
            main: "--water-500",
            hover: "--water-600",
            active: "--water-700",
            subdued: {
                main: "--water-100",
                hover: "--water-200",
                active: "--water-300",
            },
        },
        success: {
            main: "--earth-500",
            hover: "--earth-600",
            active: "--earth-700",
            subdued: {
                main: "--earth-100",
                hover: "--earth-200",
                active: "--earth-300",
            },
        },
        caution: {
            main: "--sunshine-500",
            hover: "--sunshine-600",
            active: "--sunshine-700",
            subdued: {
                main: "--sunshine-100",
                hover: "--sunshine-200",
                active: "--sunshine-300",
            },
        },
        critical: {
            main: "--sunset-500",
            hover: "--sunset-600",
            active: "--sunset-700",
            subdued: {
                main: "--sunset-100",
                hover: "--sunset-200",
                active: "--sunset-300",
            },
        },
        info: {
            main: "--plum-500",
            hover: "--plum-600",
            active: "--plum-700",
            subdued: {
                main: "--plum-100",
                hover: "--plum-200",
                active: "--plum-300",
            },
        },
    },
    border: {
        main: "--neutral-300",
        hover: "--neutral-400",
        disabled: "--neutral-100",
        active: "--neutral-500",
        subdued: {
            main: "--neutral-200",
            hover: "--neutral-300",
            active: "--neutral-400",
        },
        strong: {
            main: "--neutral-400",
            hover: "--neutral-500",
            active: "--neutral-600",
        },
        inverse: {
            main: "--neutral-700",
            hover: "--neutral-800",
            active: "--neutral-900",
        },
        primary: {
            main: "--sky-500",
            hover: "--sky-600",
            active: "--sky-700",
        },
        secondary: {
            main: "--water-500",
            hover: "--water-600",
            active: "--water-700",
        },
        success: {
            main: "--earth-500",
            hover: "--earth-600",
            active: "--earth-700",
        },
        caution: {
            main: "--sunshine-500",
            hover: "--sunshine-600",
            active: "--sunshine-700",
        },
        critical: {
            main: "--sunset-500",
            hover: "--sunset-600",
            active: "--sunset-700",
        },
        info: {
            main: "--plum-500",
            hover: "--plum-600",
            active: "--plum-700",
        },
    },
    text: {
        main: "--sky-900",
        subdued: "--neutral-600",
        disabled: "--neutral-500",
        inverse: {
            main: "--neutral-00",
            subdued: "--neutral-300",
        },
        oncolor: "--neutral-00",
        // MUI expects primary to be string
        primaryCustom: {
            main: "--sky-500",
            hover: "--sky-600",
            active: "--sky-700",
            strong: "--sky-900",
        },
        primary: "--sky-900",
        // MUI expects seconday to be string
        secondaryCustom: {
            main: "--water-500",
            hover: "--water-600",
            active: "--water-700",
            strong: "--sky-900",
        },
        secondary: "--sky-900",
        success: {
            main: "--earth-500",
            strong: "--sky-900",
        },
        caution: {
            main: "--sunshine-500",
            strong: "--sky-900",
        },
        critical: {
            main: "--sunset-500",
            hover: "--sunset-600",
            active: "--sunset-700",
            strong: "--sky-900",
        },
        info: {
            main: "--plum-500",
            strong: "--sky-900",
        },
    },
    alpha: {
        transparent: {
            main: "#000000",
            inverted: "#ffffff",
        },
        overlay: "rgba(17, 24, 39, 0.56)",
    },
};

const lightPalette = applyToPrimitiveVal(rawLightPalette);

export default lightPalette;
