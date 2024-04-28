import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#E9E3FF",
      200: "#422AFB",
      300: "#422AFB",
      400: "#e1bb80",
      500: "#FF6347", // Changed to orange
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#ddc9b4",
    },
    brandScheme: {
      100: "#E9E3FF",
      200: "#7551FF",
      300: "#7551FF",
      400: "#7551FF",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    brandTabs: {
      100: "#1e2d24",
      200: "#422AFB",
      300: "#422AFB",
      400: "#422AFB",
      500: "#422AFB",
      600: "#3311DB",
      700: "#02044A",
      800: "#190793",
      900: "#02044A",
    },
    secondaryGray: {
      100: "#7a6c5d",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#344e41",
      500: "#344e41",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547", // New orange color
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "tomato", // Keeping navy color
      100: "tomato",
      200: "tomato",
      300: "#728fea",
      400: "tomato",
      500: "#1b3bbb",
      600: "#24388a",
      700: "#2a3d45",
      800: "#354f52",
      900: "#2f3e46",
    },
    gray: {
      100: "#ddc9b4",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        overflowX: "hidden",
        bg: mode("#FF6347", "navy.900")(props), // Using orange in bg color
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: "#707EAE", // Changed to a gray color
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
