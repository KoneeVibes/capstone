import { Stack, styled } from "@mui/material";

export const AdvisoryWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/6)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		"& .border-line": {
			maxWidth: "1rem",
			maxHeight: 0,
			flex: "0 1 1rem",
			border: "1px solid var(--primary-color-variant-I)",
		},
		"& .foot-note": {
			flexDirection: "row",
			alignItems: "center",
			gap: "calc(var(--flex-gap)/12)",
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/2)",
		},
	};
});
