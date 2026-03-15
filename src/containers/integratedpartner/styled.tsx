import { Stack, styled } from "@mui/material";

export const IntegratedPartnerWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/6)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		"& .left-flank": {
			flex: 1,
			overflow: "hidden",
			"& img": {
				width: "100%",
				height: "100%",
				objectFit: "fill",
			},
		},
		"& .right-flank": {
			flex: 1,
			overflow: "hidden",
			gap: "calc(var(--flex-gap)/9)",
			"& .title": {
				flexDirection: "row",
				alignItems: "center",
				gap: "calc(var(--flex-gap)/12)",
			},
			"& .header": {
				gap: "calc(var(--flex-gap)/9)",
			},
		},
		"& .border-line": {
			maxWidth: "3rem",
			maxHeight: 0,
			flex: "0 1 3rem",
			border: "1px solid var(--primary-color-variant-III)",
		},
		[theme.breakpoints.up("tablet")]: {
			alignItems: "center",
			flexDirection: "row",
			gap: "calc(var(--flex-gap)/3)",
			padding: "calc(var(--basic-padding)/2)",
		},
		[theme.breakpoints.up("laptop")]: {
			gap: "calc(var(--flex-gap)/2)",
		},
	};
});
