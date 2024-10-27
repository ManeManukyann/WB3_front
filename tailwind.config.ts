import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0F373D",
        logInBoxColor: "#FFF",
        black: {
          black1: "#9EA2A2",
          black2: "#CFD0D1",
          black3: "#0E1617",
          black4: "#F3F3F3"
        },
        textColor: "#0F1617",
        bg: "#FAFAFA",
        red: "#FE125F",
        medium: "#0B97A7",
        disable: "#EEEEEE",
        grey: "#F7F9F9",
        green: "#00CE72",
        borderColor: "#0E373C",
        iconDivColor: "#F6F9F9",
        inputTextColor: "#f6f9f9",
        modalTextColor: "#0f1617cc",
        modalDescription: "#0f161766",
        modalPColor: "#0F181733"
      },
      fontSize: {
        lg: "32px",
        lg1: "20px",
        lg2: "16px",
        md: "14px",
        sm: "13px",
        xs: "10px"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      lineHeight: {
        line1: "26px",
        line2: "22.4px",
        line3: "19.6px",
        line4: "18.2px",
        line5: "14px",
        line6: "41.6px"
      },
      fontWeight: {
        semibold: "600",
        medium: "500",
        regular: "400"
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        md1: "16px",
        lg: "24px"
      }
    }
  },
  plugins: []
};
export default config;
