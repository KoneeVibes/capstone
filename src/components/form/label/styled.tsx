import { FormLabel, styled } from "@mui/material";
import type { BaseLabelPropsType } from "../../../types/component.type";

export const BaseLabel = styled(FormLabel)<BaseLabelPropsType>(({
	colour,
	fontsize,
	fontweight,
}) => {
	return {
		fontFamily: "Inter",
		fontWeight: fontweight || 400,
		fontSize: fontsize || "20px",
		lineHeight: "normal",
		color: colour || "var(--dark-color)",
		marginBlock: "calc(var(--basic-margin)/9)",
		overflow: "hidden",
		textOverflow: "ellipsis",
	};
});
