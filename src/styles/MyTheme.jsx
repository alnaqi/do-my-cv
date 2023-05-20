// Customization
import LightColors from "./CustomColorLight.json";
import DarkColors from "./CustomColorDark.json";

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode: mode || "light",
    ...(mode === "light" ? LightColors : DarkColors),
  },
});

export default getDesignTokens