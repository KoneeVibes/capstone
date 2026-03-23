import { Stack, styled } from "@mui/material";

export const AdvisoryWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/6)",
		padding: "0 calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
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
			padding: "0 calc(var(--basic-padding)/3) calc(var(--basic-padding)/3)",
		},
		[theme.breakpoints.up("desktop")]: {
			padding: "0 calc(var(--basic-padding)/2) calc(var(--basic-padding)/2)",
		},
	};
});
