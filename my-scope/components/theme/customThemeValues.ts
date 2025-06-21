export const SPACING = 4;

export const typography = {
    fontFamily: '"SharpGrotesk TRIAL Medium", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    xs: { fontSize: "12px", lineHeight: "16px", fontWeight: 400 },
    sm: { fontSize: "14px", lineHeight: "20px", fontWeight: 400 },
    base: { fontSize: "16px", lineHeight: "24px", fontWeight: 500 },
    lg: { fontSize: "18px", lineHeight: "24px", fontWeight: 500 },
    xl: { fontSize: "20px", lineHeight: "28px", fontWeight: 500 },
    "2xl": { fontSize: "24px", lineHeight: "32px" },
    "3xl": { fontSize: "32px", lineHeight: "36px" },
    "4xl": { fontSize: "40px", lineHeight: "40px" },
    "5xl": { fontSize: "48px", lineHeight: "48px" },
};

export const roundedValue = {
    sm: "2px",
    base: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
    "3xl": "24px",
    full: "99999px",
};

// Light theme
export const lightBoxShadow = {
    inner: "0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset",
    sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
    base: "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
    md: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
    "2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
};

// Dark theme
// Auto generated: No design mocks
export const darkBoxShadows = {
    inner: "inset 0px 1px 2px 0px rgba(255, 255, 255, 0.06)",
    sm: "0px 1px 2px rgba(0, 0, 0, 0.4)",
    base: "0px 1px 3px rgba(0, 0, 0, 0.5), 0px 1px 2px rgba(255, 255, 255, 0.04)",
    md: "0px 2px 4px rgba(0, 0, 0, 0.6), 0px 4px 6px rgba(255, 255, 255, 0.06)",
    lg: "0px 4px 8px rgba(0, 0, 0, 0.65), 0px 10px 15px rgba(255, 255, 255, 0.08)",
    xl: "0px 10px 20px rgba(0, 0, 0, 0.7), 0px 20px 25px rgba(255, 255, 255, 0.1)",
    "2xl": "0px 25px 50px rgba(0, 0, 0, 0.8)",
};
