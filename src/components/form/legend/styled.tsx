import { styled } from "@mui/material";
import type { BaseTypographyType } from "../../../types/component.type";

export const BaseLegend = styled("legend")<BaseTypographyType>(({
	fontweight,
	fontsize,
	colour,
}) => {
	return {
		fontFamily: "Instrument Serif",
		fontWeight: fontweight || 400,
		fontSize: fontsize || "60px",
		lineHeight: "normal",
		color: colour || "var(--light-color)",
		overflow: "hidden",
		textOverflow: "ellipsis",
	};
});
