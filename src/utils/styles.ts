import { Colors } from "@/@types/preferences";
import { presetPrimaryColors } from "@ant-design/colors";

export class StyleUtils {
  public static getRandomAccentColor() {
    const colors = Object.values(presetPrimaryColors);

    return colors[Math.floor(Math.random() * colors.length)];
  }

  public static getAccentColor(color: Colors) {
    return presetPrimaryColors[color]
  }
}
