import { Select, styled } from "@mui/material";
import type { BaseInputPropsType } from "../../../types/component.type";

export const BaseSelect = styled(Select)<BaseInputPropsType>(({
	colour,
	bgcolor,
	fontweight,
	fontsize,
	border,
	radius,
}) => {
	return {
		fontFamily: "Inter",
		fontWeight: fontweight || 400,
		fontSize: fontsize || "13px",
		lineHeight: "normal",
		border: border || "1px solid var(--dark-color)",
		borderRadius: radius || "9px",
		color: colour || "var(--dark-color)",
		backgroundColor: bgcolor || "transparent",
		padding: "calc(var(--basic-padding)/3)",
		outline: "none",
		"& .MuiInputBase-input": {
			textOverflow: "ellipsis",
			padding: 0,
		},
		"& fieldset": {
			border: "none",
		},
	};
});
