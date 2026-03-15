import { Stack, styled } from "@mui/material";

export const HeroWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/6)",
		paddingBottom: "calc(var(--basic-padding)/3)",
		"& .left-flank": {
			flex: 0.6,
			overflow: "hidden",
			gap: "calc(var(--flex-gap)/9)",
			"& .call-to-action": {
				gap: "calc(var(--flex-gap)/12)",
			},
		},
		"& .right-flank": {
			flex: 0.4,
			overflow: "hidden",
			"& img": {
				width: "100%",
				height: "100%",
				objectFit: "fill",
			},
		},
		[theme.breakpoints.up("mobile")]: {
			"& .left-flank": {
				"& .call-to-action": {
					flexDirection: "row",
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			flexDirection: "row",
			padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
			paddingBottom: "calc(var(--basic-padding)/3)",
		},
		[theme.breakpoints.up("laptop")]: {
			alignItems: "center",
		},
		[theme.breakpoints.up("xl")]: {
			"& .left-flank": {
				flex: 0.7,
				overflow: "hidden",
			},
			"& .right-flank": {
				flex: 0.3,
				overflow: "hidden",
			},
		},
	};
});
