import Platform from "react-native";
import colors from "./colors";

// const type = {
//   base: Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif",
//   bold: Platform.OS === "ios" ? "HelveticaNeue-Bold" : "sans-serif-condensed",
//   emphasis: Platform.OS === "ios" ? "HelveticaNeue-Italic" : "sans-serif",
// };
export default {
  colors,
  text: {
    fontSize: Platform.OS === "android" ? 18 : 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
