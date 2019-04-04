import { IColorScale } from "../schemas/IColorScale";

class PrimaryColor implements IColorScale {
  veryLight = "#64AAF6";
  light = "#2D8BF3";
  base = "#2285F2";
  dark = "#207BE0";
  veryDark = "#1D71CE";
}

class TextColor implements IColorScale {
  veryLight = "#7B8B9A";
  light = "#66788A";
  base = "#425A70";
  dark = "#234361";
  veryDark = "";
}

export const Color = {
  primary: new PrimaryColor(),
  text: new TextColor(),

  // DEPRECATED
  primaryColor: "#2285F2",
  superLightPrimaryColor: "#64AAF6",
  lightPrimaryColor: "#2D8BF3",
  borderColor: "rgba(0, 0, 0, 0.12)",
  textColor: "#607d8b",
  darkTextColor: "rgb(42, 47, 69)",
  secondaryTextColor: "rgb(105, 115, 134)"
};
