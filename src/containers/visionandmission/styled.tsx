import { Stack, styled } from "@mui/material";

export const VisionAndMissionWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/6)",
		padding: "calc(var(--basic-padding)/3) calc(var(--basic-padding)/6)",
		"& .left-flank": {
			flex: 1,
			overflow: "hidden",
			borderRadius: "20px",
			"& img": {
				width: "100%",
				height: "100%",
				objectFit: "fill",
				borderRadius: "inherit",
			},
		},
		"& .right-flank": {
			flex: 1,
			overflow: "hidden",
			gap: "calc(var(--flex-gap)/9)",
			"& .vision": {
				flex: 1,
				borderRadius: "20px",
				padding: "calc(var(--basic-padding)/6)",
				backgroundColor: "var(--primary-color-variant-I)",
				"& .content-stack": {
					gap: "calc(var(--flex-gap)/6)",
				},
			},
			"& .mission": {
				flex: 1,
				borderRadius: "20px",
				padding: "calc(var(--basic-padding)/6)",
				backgroundColor: "var(--primary-color-variant-IX)",
				"& .content-stack": {
					gap: "calc(var(--flex-gap)/6)",
					"& .mission-items": {
						gap: "calc(var(--flex-gap)/12)",
						"& .bullet-point": {
							flexDirection: "row",
							gap: "calc(var(--flex-gap)/9)",
							"& .marker": {
								flex: "0 1 5px",
								overflow: "hidden",
							},
							"& .body": {
								flex: "1",
								overflow: "hidden",
							},
						},
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			flexDirection: "row",
			gap: "calc(var(--flex-gap)/3)",
			padding: "calc(var(--basic-padding)/3)",
		},
		[theme.breakpoints.up("desktop")]: {
			gap: "calc(var(--flex-gap)/2)",
			padding: "calc(var(--basic-padding)/2)",
			"& .left-flank": {
				"& img": {
					maxHeight: "30rem",
				},
			},
		},
	};
});
