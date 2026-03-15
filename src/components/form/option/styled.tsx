import { MenuItem, styled } from "@mui/material";
import type { BaseTypographyType } from "../../../types/component.type";

export const BaseOption = styled(MenuItem)<BaseTypographyType>(({
	colour,
	fontweight,
	fontsize,
}) => {
	return {
		fontFamily: "Inter",
		fontWeight: fontweight || 400,
		fontSize: fontsize || "13px",
		lineHeight: "normal",
		color: colour || "var(--dark-color)",
		padding: "calc(var(--basic-padding)/9)",
	};
});
