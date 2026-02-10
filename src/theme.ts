'use client'
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

    // Smokin Brothers inspired colors
const smokeBlue = '#2C5F7C';        // Deep blue-gray like smoke
const rustRed = '#A0522D';          // Rust/burnt orange like BBQ char
const warmRed = '#D2691E';          // Warmer red for dark mode
const signatureRed = '#DC2626';     // Bright red from "NEWS • EVENTS • RECIPES" section
const charcoalGray = '#36454F';     // Charcoal gray
const lightSmoke = '#B0C4DE';       // Light blue-gray for accents
const ashGray = '#708090';          // Medium gray like ash



const theme = createTheme({
  colorSchemes: { 
    light: {
      palette: {
        primary: {
          main: "rgb(211, 38, 38)", // main red
          light: "rgb(239, 102, 102)",
          dark: "rgb(153, 27, 27)",
          contrastText: "#fff",
        },
        secondary: {
          main: "rgb(108, 117, 125)", // main grey
          light: "rgb(173, 181, 189)",
          dark: "rgb(73, 80, 87)",
          contrastText: "#fff",
        },
        success: {
          main: "rgb(40, 167, 69)", // main green
          light: "rgb(92, 184, 92)",
          dark: "rgb(25, 135, 84)",
          contrastText: "#fff",
        },
        warning: {
          main: "rgb(255, 165, 0)", // main orange
          light: "rgb(255, 193, 51)",
          dark: "rgb(230, 126, 34)",
          contrastText: "#000",
        },
        info: {
          main: "rgb(0, 123, 255)", // main blue
          light: "rgb(51, 153, 255)",
          dark: "rgb(0, 86, 179)",
          contrastText: "#fff",
        },
        background: {
            default: '#FAFAFA',        // Warm off-white background
            paper: '#FFFFFF',
        },
        text: {
            primary: charcoalGray,     // Dark gray text
            secondary: ashGray,        // Medium gray for secondary text
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "rgb(211, 38, 38)", // lighter red for dark mode
          light: "rgb(255, 154, 154)",
          dark: "rgb(239, 102, 102)",
          contrastText: "#fff",
        },
        secondary: {
          main: "rgb(173, 181, 189)", // lighter grey for dark mode
          light: "rgb(206, 212, 218)",
          dark: "rgb(108, 117, 125)",
          contrastText: "#000",
        },
        success: {
          main: "rgb(92, 184, 92)", // lighter green for dark mode
          light: "rgb(144, 238, 144)",
          dark: "rgb(40, 167, 69)",
          contrastText: "#1A1A1A",
        },
        
        warning: {
          main: "rgb(253, 181, 37)", // lighter orange for dark mode
          light: "rgb(255, 215, 102)",
          dark: "rgb(255, 165, 0)",
          contrastText: "#000",
        },
        info: {
          main: "rgb(51, 153, 255)", // lighter blue for dark mode
          light: "rgb(102, 178, 255)",
          dark: "rgb(0, 123, 255)",
          contrastText: "#fff",
        },
        background: {
            default: '#1A1A1A',        // Deep charcoal background
            paper: '#242424',          // Slightly lighter for cards/papers
        },
        text: {
            primary: lightSmoke,        // Light gray text
            secondary: '#B0B0B0',      // Medium gray for secondary text
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 360,    // Custom sm breakpoint
  //     md: 540,    // Custom md breakpoint  
  //     lg: 992,    // Custom lg breakpoint
  //     xl: 1200,   // Custom xl breakpoint
  //   },
  // },
});

export default theme;
