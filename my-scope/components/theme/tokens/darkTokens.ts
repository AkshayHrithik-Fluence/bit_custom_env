import { applyToPrimitiveVal } from "../utils";

const rawDarkPalette = {
    mode: "dark",
    primary: {
        main: "--sky-500",
        hover: "--sky-400",
        active: "--sky-300",
        subdued: {
            main: "--sky-700",
            hover: "--sky-800",
            active: "--sky-900",
        },
    },
    secondary: {
        main: "--water-500",
        hover: "--water-600",
        active: "--water-700",
        subdued: {
            main: "--water-900",
            hover: "--water-800",
            active: "--water-700",
        },
    },
    success: {
        main: "--earth-500",
        hover: "--earth-600",
        active: "--earth-700",
        subdued: {
            main: "--earth-900",
            hover: "--earth-800",
            active: "--earth-700",
        },
    },
    caution: {
        main: "--sunshine-400",
        hover: "--sunshine-500",
        active: "--sunshine-600",
        subdued: {
            main: "--sunshine-900",
            hover: "--sunshine-800",
            active: "--sunshine-700",
        },
    },
    critical: {
        main: "--sunset-400",
        hover: "--sunset-500",
        active: "--sunset-600",
        subdued: {
            main: "--sunset-900",
            hover: "--sunset-800",
            active: "--sunset-700",
        },
    },
    info: {
        main: "--plum-400",
        hover: "--plum-500",
        active: "--plum-600",
        subdued: {
            main: "--plum-900",
            hover: "--plum-800",
            active: "--plum-700",
        },
    },
    bg: {
        main: "--neutral-900",
        hover: "--neutral-800",
        active: "--neutral-700",
        disabled: "--neutral-800",
        overlay: {
            main: "--neutral-800",
            hover: "--neutral-700",
            active: "--neutral-600",
        },
        strong: {
            main: "--neutral-600",
            hover: "--neutral-500",
            active: "--neutral-400",
        },
        inverse: {
            main: "--neutral-00",
            hover: "--neutral-100",
            active: "--neutral-200",
        },
        primary: {
            main: "--sky-500",
            hover: "--sky-400",
            active: "--sky-300",
            subdued: {
                main: "--sky-700",
                hover: "--sky-800",
                active: "--sky-900",
            },
        },
        success: {
            main: "--earth-500",
            hover: "--earth-600",
            active: "--earth-700",
            subdued: {
                main: "--earth-900",
                hover: "--earth-800",
                active: "--earth-700",
            },
        },
        caution: {
            main: "--sunshine-400",
            hover: "--sunshine-500",
            active: "--sunshine-600",
            subdued: {
                main: "--sunshine-900",
                hover: "--sunshine-800",
                active: "--sunshine-700",
            },
        },
        critical: {
            main: "--sunset-400",
            hover: "--sunset-500",
            active: "--sunset-600",
            subdued: {
                main: "--sunset-900",
                hover: "--sunset-800",
                active: "--sunset-700",
            },
        },
        info: {
            main: "--plum-400",
            hover: "--plum-500",
            active: "--plum-600",
            subdued: {
                main: "--plum-900",
                hover: "--plum-800",
                active: "--plum-700",
            },
        },
        secondary: {
            main: "--water-500",
            hover: "--water-600",
            active: "--water-700",
            subdued: {
                main: "--water-900",
                hover: "--water-800",
                active: "--water-700",
            },
        },
    },
    border: {
        main: "--neutral-700",
        hover: "--neutral-600",
        disabled: "--neutral-800",
        strong: {
            main: "--neutral-500",
            hover: "--neutral-400",
            active: "--neutral-300",
        },
        subdued: {
            main: "--neutral-800",
            hover: "--neutral-700",
            active: "--neutral-600",
        },
        inverse: {
            main: "--neutral-100",
            hover: "--neutral-50",
            active: "--neutral-00",
        },
        primary: {
            main: "--sky-500",
            hover: "--sky-400",
            active: "--sky-300",
        },
        success: {
            main: "--earth-400",
            hover: "--earth-500",
            active: "--earth-600",
        },
        caution: {
            main: "--sunshine-400",
            hover: "--sunshine-500",
            active: "--sunshine-600",
        },
        critical: {
            main: "--sunset-400",
            hover: "--sunset-500",
            active: "--sunset-600",
        },
        info: {
            main: "--plum-400",
            hover: "--plum-500",
            active: "--plum-600",
        },
        secondary: {
            main: "--water-400",
            hover: "--water-500",
            active: "--water-600",
        },
    },
    text: {
        main: "--neutral-00",
        subdued: "--neutral-400",
        disabled: "--neutral-500",
        inverse: {
            main: "--neutral-900",
            subdued: "--neutral-500",
        },
        oncolor: "--neutral-00",
        // MUI expects primary to be string
        primaryCustom: {
            main: "--sky-300",
            hover: "--sky-200",
            active: "--sky-100",
            strong: "--sky-900",
        },
        primary: "--neutral-00",
        // MUI expects seconday to be string
        secondaryCustom: {
            main: "--water-400",
            hover: "--water-500",
            active: "--water-600",
            strong: "--sky-900",
        },
        secondary: "--neutral-00",
        success: {
            main: "--earth-400",
            strong: "--sky-900",
        },
        caution: {
            main: "--sunshine-400",
            strong: "--sky-900",
        },
        critical: {
            main: "--sunset-400",
            hover: "--sunset-500",
            active: "--sunset-600",
            strong: "--sky-900",
        },
        info: {
            main: "--plum-400",
            strong: "--sky-900",
        },
    },
    alpha: {
        transparent: {
            main: "#ffffff",
            inverted: "#000000",
        },
        overlay: "rgba(31, 41, 55, 0.80)",
    },
};

const darkPalette = applyToPrimitiveVal(rawDarkPalette);

export default darkPalette;
