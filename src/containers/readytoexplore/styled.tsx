import { Stack, styled } from "@mui/material";

export const ReadyToExploreWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		background: "var(--primary-color-variant-V)",
		padding: "calc(var(--basic-padding)/3)",
		"& .heading-area": {
			maxWidth: "45rem",
			gap: "calc(var(--flex-gap)/3)",
			"& .title": {
				flexDirection: "row",
				alignItems: "center",
				overflow: "hidden",
				justifyContent: "center",
				gap: "calc(var(--flex-gap)/12)",
			},
			"& .call-to-action": {
				display: "flex",
				justifyContent: "center",
			},
		},
		"& .border-line": {
			maxWidth: "3rem",
			maxHeight: 0,
			flex: "0 1 3rem",
			border: "1px solid var(--primary-color-variant-I)",
		},
		[theme.breakpoints.up("miniTablet")]: {
			"& .heading-area": {
				marginLeft: "auto",
				marginRight: "auto",
			},
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/2)",
		},
	};
});
