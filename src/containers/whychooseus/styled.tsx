import { Stack, styled } from "@mui/material";

export const WhyChooseUsWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		background: "var(--primary-color)",
		padding: "calc(var(--basic-padding)/6)",
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
			"& .header": {
				gap: "calc(var(--flex-gap)/9)",
			},
		},
		"& .border-line": {
			maxWidth: "3rem",
			maxHeight: 0,
			flex: "0 1 3rem",
			border: "1px solid var(--yellow-color)",
		},
		"& .solution-stack": {
			borderRadius: "20px",
			gap: "calc(var(--flex-gap)/6)",
			justifyContent: "space-between",
			backgroundColor: "var(--light-color)",
			padding: "calc(var(--basic-padding)/6)",
			"& .header": {
				gap: "calc(var(--flex-gap)/9)",
				"& .icon-area": {
					overflow: "hidden",
					display: "flex",
					"& img": {
						width: "100%",
					},
				},
				"& .title-area": {
					gap: "calc(var(--flex-gap)/12)",
				},
			},
			"& .separator": {
				border: "1px solid var(--light-color-variant-VIII)",
			},
			"& .tags": {
				flexWrap: "wrap",
				flexDirection: "row",
				gap: "calc(var(--flex-gap)/9)",
				"& .tag-item": {
					overflow: "hidden",
					alignItems: "center",
					flexDirection: "row",
					gap: "calc(var(--flex-gap)/9)",
					"& .icon-area": {
						overflow: "hidden",
						display: "flex",
						maxWidth: "15px",
						flex: "0 1 15px",
						"& img": {
							width: "100%",
						},
					},
					"& .text-area": {
						flex: 1,
						overflow: "hidden",
					},
				},
			},
		},
		[theme.breakpoints.up(200)]: {
			"& .solution-stack": {
				"& .header": {
					"& .icon-area": {
						width: "100px",
						height: "100px",
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
			padding: "calc(var(--basic-padding)/3)",
			"& .solution-stack": {
				"& .header": {
					flexDirection: "row",
					alignItems: "center",
				},
			},
		},
	};
});
