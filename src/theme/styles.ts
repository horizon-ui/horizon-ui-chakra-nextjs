import { color } from "@chakra-ui/styled-system";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    brand: {
      100: "#df9d41",
      200: "#df9d41", // Changed to the mix color
      300: "#df9d41", // Changed to the mix color
      400: "#df9d41", // Changed to the mix color
      500: "#df9d41", // Changed to the mix color
      600: "#df9d41", // Changed to the mix color
      700: "#0e0f11", // Changed to the mix color
      800: "#0e0f11", // Changed to the mix color
      900: "#0e0f11", // Changed to the mix color
    },
    brandScheme: {
      100: "#E9E3FF",
      200: "#df9d41", // Changed to the mix color
      300: "#df9d41", // Changed to the mix color
      400: "#df9d41", // Changed to the mix color
      500: "#df9d41", // Changed to the mix color
      600: "#df9d41", // Changed to the mix color
      700: "#0e0f11", // Changed to the mix color
      800: "#0e0f11", // Changed to the mix color
      900: "#0e0f11", // Changed to the mix color
    },
    brandTabs: {
      100: "#df9d41",
      200: "#df9d41", // Changed to the mix color
      300: "#df9d41", // Changed to the mix color
      400: "#df9d41", // Changed to the mix color
      500: "#df9d41", // Changed to the mix color
      600: "#df9d41", // Changed to the mix color
      700: "#0e0f11", // Changed to the mix color
      800: "#0e0f11", // Changed to the mix color
      900: "#0e0f11", // Changed to the mix color
    },
    secondaryGray: {
      100: "#df9d41",
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
      100: "#df9d41",
      500: "#df9d41",
      600: "#756bff",
    },
    blue: {
      50: "#df9d41", // Changed to the mix color
      500: "#df9d41", // Changed to the mix color
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#756bff",
      500: "#df9d41",
    },
    navy: {
      50: "#df9d41", // Changed to the mix color
      100: "#df9d41", // Changed to the mix color
      200: "#df9d41", // Changed to the mix color
      300: "#df9d41", // Changed to the mix color
      400: "#df9d41", // Changed to the mix color
      500: "#df9d41", // Changed to the mix color
      600: "#df9d41", // Changed to the mix color
      700: "#0e0f11", // Changed to the mix color
      800: "#0e0f11", // Changed to the mix color
      900: "#0e0f11", // Changed to the mix color
    },
    gray: {
      100: "#FAFCFE",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
        color: mode("orange.500", "orange.500")(props), // Text color set to orange
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
