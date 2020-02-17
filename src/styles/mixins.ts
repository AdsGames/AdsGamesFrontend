import { defaultTheme } from "./theme";

const { dimensions } = defaultTheme;

export const getEmSize = (size: number) => size / dimensions.fontSize.regular;
