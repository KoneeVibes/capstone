import { Button, styled, type ButtonProps } from "@mui/material";
import type { BaseButtonPropsType } from "../../types/component.type";

export const BaseButton = styled(Button)<ButtonProps & BaseButtonPropsType>(({
	variant,
	fontsize,
	fontweight,
	radius,
	padding,
	bgcolor,
	border,
	colour,
}) => {
	return {
		fontFamily: "Arial",
		fontWeight: fontweight || 700,
		fontSize: fontsize || "13px",
		lineHeight: "normal",
		borderRadius: radius || "80px",
		border:
			variant === "contained"
				? "none"
				: border || "1px solid var(--primary-color-variant-I)",
		color:
			variant === "contained"
				? colour || "var(--dark-color-variant-I)"
				: colour || "var(--dark-color-variant-I)",
		background:
			variant === "contained"
				? bgcolor || "var(--primary-color-variant-I)"
				: bgcolor || "transparent",
		padding: padding || "calc(var(--basic-padding)/3)",
		textTransform: "capitalize",
		minWidth: 0,
		"&:hover": {
			border:
				variant === "contained"
					? "none"
					: border || "1px solid var(--primary-color-variant-I)",
			background:
				variant === "contained"
					? bgcolor || "var(--primary-color-variant-I)"
					: bgcolor || "transparent",
		},
	};
});
