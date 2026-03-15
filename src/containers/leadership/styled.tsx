import { Stack, styled } from "@mui/material";

export const LeadershipWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		background: "var(--light-color-variant-VII)",
		padding: "calc(var(--basic-padding)/3)",
		"& .heading-area": {
			maxWidth: "40rem",
			gap: "calc(var(--flex-gap)/9)",
			"& .title": {
				flexDirection: "row",
				alignItems: "center",
				overflow: "hidden",
				justifyContent: "center",
				gap: "calc(var(--flex-gap)/12)",
			},
		},
		"& .border-line": {
			maxWidth: "3rem",
			maxHeight: 0,
			flex: "0 1 3rem",
			border: "1px solid var(--yellow-color)",
		},
		"& .visioner-stack": {
			borderRadius: "30px",
			"& .thumbnail-area": {
				backgroundColor: "var(--primary-color)",
				borderRadius: "inherit",
				flex: 1,
				overflow: "hidden",
				height: "-webkit-fill-available",
				"& img": {
					width: "100%",
					height: "-webkit-fill-available",
				},
			},
			"& .text-area": {
				gap: "calc(var(--flex-gap)/6)",
				padding: "calc(var(--basic-padding)/9) 0",
				flex: 1,
				overflow: "hidden",
				"& .qualifications": {
					flexWrap: "wrap",
					flexDirection: "row",
					gap: "calc(var(--flex-gap)/9)",
					"& .qualification-item": {
						overflow: "hidden",
						backgroundColor: "var(--primary-color-variant-VII)",
						padding: "calc(var(--basic-padding)/24)",
					},
				},
			},
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
		[theme.breakpoints.up("desktop")]: {
			"& .visioner-stack": {
				alignItems: "center",
				flexDirection: "row",
				backgroundColor: "var(--primary-color-variant-VIII)",
				"& .text-area": {
					padding: "calc(var(--basic-padding)/3)",
				},
			},
		},
	};
});
