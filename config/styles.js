import Platform from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: Platform.OS === "android" ? 18 : 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
