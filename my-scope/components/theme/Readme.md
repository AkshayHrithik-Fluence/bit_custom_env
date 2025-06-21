# 🎨 Theme Folder

## Overview

The `theme/` folder manages the application’s theming system, including:

- ✅ Light and dark modes
- ✅ Design tokens (CSS variables)
- ✅ MUI style overrides
- ✅ Centralized and scalable design configuration

---

## 📁 Folder Structure

```plaintext
theme/
├── tokens/                  # Design tokens for themes
│   ├── primitiveValue.ts    # Raw CSS variables (e.g., colors)
│   ├── lightTokens.ts       # Light theme palette
│   └── darkTokens.ts        # Dark theme palette
│
├── Models/
│   └── customThemeType.ts   # TypeScript definitions for themes
│
├── utils/
│   └── index.ts             # Utility to resolve token values
│
├── hooks/
│   └── useThemeMode.tsx     # Hook to access & toggle theme mode
│
├── Provider/
│   ├── ThemeContext.ts      # Theme mode context
│   └── ThemeContextProvider.tsx  # Provider with localStorage support
│
├── customThemeValues.ts     # Shared theme values (spacing, typography, shadows, etc.)
└── theme.tsx                # Final theme config with MUI overrides
```

---

## 🧩 Key Components

### 1. Tokens

- **primitiveValue.ts**: Defines raw CSS variables like `--neutral-50`, `--sky-500`.
- **lightTokens.ts / darkTokens.ts**: Map primitives to themed palettes.
- Uses `applyToPrimitiveVal` to resolve variables dynamically.

---

### 2. Utilities

- **utils/index.ts**:
    - `applyToPrimitiveVal`: Recursively resolves CSS variable references in JS objects.

---

### 3. Custom Theme Values

- **customThemeValues.ts** includes shared values:
    - 📏 Spacing
    - 🔠 Typography
    - 🟦 Rounded Corners
    - 🌫️ Box Shadows (theme-specific)

---

### 4. Theme Context & Provider

- **ThemeContext.ts**: Defines the `ThemeModeContext`.
- **ThemeContextProvider.tsx**:
    - Wraps your app to enable light/dark switching.
    - Persists mode in `localStorage`.

---

### 5. Custom Hook

- **useThemeMode.tsx**:
    - Custom hook to access and toggle the current theme mode.

---

### 6. Final Theme Configuration

- **theme.tsx**:
    - Combines tokens, shared values, and MUI overrides.
    - Extends MUI's default theme with:
        - Custom properties (e.g., `rounded`, `shadow`)
        - Component-specific style overrides (e.g., `MuiButton`, `MuiTypography`)

---

## 🚀 Usage Examples

### Accessing the Theme

```tsx
import { useTheme } from "@mui/material";

const MyComponent = () => {
    const theme = useTheme();

    return (
        <Box sx={{ backgroundColor: theme.palette.bg.main }}>Hello, World!</Box>
    );
};
```

### Toggling Theme Mode

```tsx
import { useThemeMode } from "@toolkit/theme/hooks/useThemeMode";

const ThemeToggle = () => {
    const { mode, toggleMode } = useThemeMode();

    return (
        <button onClick={toggleMode}>
            Switch to {mode === "light" ? "dark" : "light"} mode
        </button>
    );
};
```

---

## 🛠 Customization

### Adding New Tokens

- Add new variables to `primitiveValue.ts`
- Map them in `lightTokens.ts` and `darkTokens.ts`

### Extending the Theme

- Update `customThemeValues.ts` for shared values
- Modify `theme.tsx` to include new properties or component overrides

---

## 📚 References

- [Material-UI Theming Docs](https://mui.com/material-ui/customization/theming/)
