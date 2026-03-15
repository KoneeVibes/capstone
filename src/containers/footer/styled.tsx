import { Stack, styled } from "@mui/system";

export const FooterWrapper = styled(Stack)(({ theme }) => {
	return {
		padding: "calc(var(--basic-padding)/6)",
		backgroundColor: "var(--primary-color-variant-II)",
		"& .top-flank": {
			gap: "calc(var(--flex-gap)/3)",
			"& .general-information, & .quick-links, & .sectors, & .contact-information":
				{
					flex: 1,
					overflow: "hidden",
					gap: "calc(var(--flex-gap)/9)",
					"& .logo-area": {
						overflow: "hidden",
						"& img": {
							width: "100%",
							height: "auto",
							cursor: "pointer",
						},
					},
				},
			"& .general-information": {
				flex: 2,
			},
			"& .links-area, & .sectors-area, & .comms-area": {
				gap: "calc(var(--flex-gap)/12)",
				"& .comms-icon": {
					display: "flex",
					flexShrink: 1,
					overflow: "hidden",
				},
			},
		},
		"& .bottom-flank": {
			gap: "calc(var(--flex-gap)/9)",
		},
		[theme.breakpoints.up(280)]: {
			"& .top-flank": {
				"& .general-information": {
					"& .logo-area": {
						"& img": {
							width: "auto",
						},
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
		},
		[theme.breakpoints.up("laptop")]: {
			"& .top-flank": {
				flexDirection: "row",
			},
			"& .bottom-flank": {
				flexDirection: "row",
				gap: "calc(var(--flex-gap)/3)",
				justifyContent: "space-between",
			},
		},
	};
});
