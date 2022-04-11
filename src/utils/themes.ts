declare module "@emotion/react" {
export interface Theme {
    primary: string 
    secondary: string 
    tertiary: string 
    quartenary: string 
    quinary: string 
    headerGradient: string 
}
}
const themes = {
  default: {
    primary: "#FCF2DD", //light grey "cultured"- text
    secondary: "#1F2232", //raisin black- background
    tertiary: "#FFD449", //mustard- link
    quartenary: "#F3E37C", //yellow crayola- hover
    quinary: "#A8D5E2", // light blue header
    headerGradient: "linear-gradient(0deg, rgba(71, 169, 194,0.75) 0%, rgba(31, 34, 50, 1) 100%);"
    },
  light: {
    primary: "#1F2232", //raisin black text
    secondary: "#E8E9EB", //platinum background
    tertiary: "#F9A620", //bright yellow crayola- link
    quartenary: "#FFDB58", //mustard- hover
    quinary: "#0077B6", // star command blue header
    headerGradient: "linear-gradient(0deg, rgba(0, 119, 182,0.75) 0%, rgba(31, 34, 50, 1) 100%);"
  }
};

export default themes;
